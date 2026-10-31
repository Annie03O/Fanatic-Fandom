"use client";
import { useState } from "react";
import { convertToCharacterInfobox } from "../../functions/Convert/convertToCharacterInfobox";
import type { Character } from "@/app/models/types/characters/Character";
import type { Occupation } from "@/app/models/types/characters/Occupation";
import { ModalComponent } from "@/app/models/objects/ModalComponent";
import type { Show } from "@/app/models/types/structure/Show";
import { createImages } from "@/app/models/objects/images";
import { toggleImage } from "@/app/functions/toggleImage";
import type { Image } from "@/app/models/types/structure/Image";

type Props = {
  show: Show;
  character: Character;
};

// More specific guard: Occupation has "title"
const isOccupation = (v: unknown): v is Occupation =>
  !!v && typeof v === "object" && "title" in v && "started" in v;

// Education typically has "place" (and not "title")
const isEducation = (v: unknown): v is Occupation =>
  !!v && typeof v === "object" && "place" in v && "started" in v;

export const CharacterInfobox = ({ show, character }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chosenImage, setChosenImage] = useState<string>("");

  const images = [
    ...(createImages(show) ?? []),
    ...(character.relationships?.flatMap((relationship) =>
      relationship.imgUrl ? [relationship.imgUrl] : [],
    ) ?? []),
  ];


  const characterWithInfobox = convertToCharacterInfobox(character);
  const box = characterWithInfobox.infobox[0];

  if (!box) return null;

  const displayName =
    characterWithInfobox.goesByNickname && characterWithInfobox.nickname?.length
      ? characterWithInfobox.nickname[0]
      : characterWithInfobox.firstName;

  if (displayName === undefined) {
    console.error("Name is missing for character with id:", character.id);
    return null;
  }

  const posterUrl = characterWithInfobox.posterUrl ?? characterWithInfobox.imageUrl;
  
  const characterImages: Image[] = images
    .map((image) => ({
      ...image,
      pageId: !("pageId" in image)
        ? []
        : Array.isArray(image.pageId)
          ? image.pageId
          : typeof image.pageId === "string"
            ? [image.pageId]
            : [],
    }))
    .filter((image) => image.pageId.includes(character.id));

  const modalImages: Image[] = characterImages.some(
    (image) => image.src === posterUrl.src,
  )
    ? characterImages
    : [
        { 
          src: posterUrl.src, 
          alt: displayName, 
          pageId: [character.id] 
        },
        ...characterImages,
      ];

  const openModal = () => {
    toggleImage(posterUrl.src, setChosenImage);
    setIsModalOpen(true);
  };

  return (
    <section className="flex flex-col justify-content items-center gap-3 bg-[#f2e8ff] text-black  shadow-sm shadow-gray-400">
      <h2 className="text-3xl text-center">{displayName}</h2>
      {posterUrl ? (
        <button
          type="button"
          className="cursor-pointer"
          onClick={openModal}
          aria-label={`View ${displayName} poster`}
        >
          <img
            src={posterUrl.src}
            alt={displayName}
            className="w-full h-auto"
          />
        </button>
      ) : null}
      <section className="text-md w-[98%]">
        {box.fields.map((item) => {
          if (!item) return null;

          return (
            <section
              key={item.label}
              className="grid grid-cols-10 gap-2 p-2 border-b  border-gray-400"
            >
              <span className="col-span-3 font-semibold">{item.label}</span>

              <span className="col-span-7">
                {Array.isArray(item.info) ? (
                  <ul className="flex flex-col gap-2">
                    {item.info.map((line: unknown, i: number) => {
                      // 1) Occupation first (prevents it being caught by Education)
                      if (isOccupation(line)) {
                        return (
                          <li
                            key={`${item.label}-${line.title}-${line.started}-${i}`}
                            className="leading-snug"
                          >
                            <div className="text-sm opacity-80">
                              {Number(line.started) === Number(line.ended) ? line.started : line.ended ?  line.started + " – " +
                               line.ended : line.started + " - " + "TBA"} 
                            </div>
                            <div className="font-medium">
                              {line.title}
                              {line.place ? ` — ${line.place}` : ""}
                            </div>
                            
                          </li>
                        );
                      }

                      // 2) Education
                      if (isEducation(line)) {
                        return (
                          <li
                            key={`${item.label}-${line.place}-${line.started}-${i}`}
                            className="leading-snug"
                          >
                            <div className="font-medium">{line.place}</div>
                            <div className="text-sm opacity-80">
                              {line.started} –{" "}
                              {line.hasEnded ? line.ended ?? "" : "Present"}
                            </div>
                          </li>
                        );
                      }

                      // 3) string[] fallback
                      return (
                        <li key={`${item.label}-${i}`} className="leading-snug">
                          {String(line)}
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <span>{String(item.info)}</span>
                )}
              </span>
            </section>
          );
        })}
      </section>
      {isModalOpen ? (
        <ModalComponent
          title={displayName}
          images={modalImages}
          imgUrl={chosenImage}
          toggleImage={setChosenImage}
          onClose={() => setIsModalOpen(false)}
          id={character.id}
          type="Character"
        />
      ) : null}
    </section>
  );
};