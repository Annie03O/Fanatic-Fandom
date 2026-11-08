"use client";
import { Fragment, useEffect, useState } from "react";
import { convertToCharacterInfobox } from "../../functions/Convert/convertToCharacterInfobox";
import type { Character } from "@/app/models/types/characters/Character";
import type { Occupation } from "@/app/models/types/characters/Occupation";
import { ModalComponent } from "@/app/models/objects/ModalComponent";
import type { Show } from "@/app/models/types/structure/Show";
import { createImages, relationshipImages } from "@/app/models/objects/images";
import { toggleImage } from "@/app/functions/toggleImage";
import type { Image } from "@/app/models/types/structure/Image";
import { seriesBetaWithSlug } from "@/app/functions/WithSlug/allSeriesWithSlug";
import { useParams } from "next/navigation";

type Props = {
  show: Show;
  character: Character;
};

// More specific guard: Occupation has "title"
const isOccupation = (v: unknown): v is Occupation =>
  !!v && typeof v === "object" && "title" in v && "started" in v;

// Education typically has "place" (and not "title").
// Guard against occupation records that also include a place field.
const isEducation = (v: unknown): v is Occupation & { place: string; hasEnded?: boolean; ended?: string | number } =>
  !!v &&
  typeof v === "object" &&
  "place" in v &&
  "started" in v &&
  !("title" in v);

export type InfoboxCategory =
  | "Biography"
  | "Relationships"
  | "Career"
  | "Appearance"
  | "Backstage";

export type InfoField = {
  label: string;
  info: string | string[] | Occupation[];
  category?: InfoboxCategory;
} | null;

export const CharacterInfobox = ({ show, character }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chosenImage, setChosenImage] = useState<string>("");
  const [isAlive, setIsAlive] = useState<"Alive" | "Deceased">();
  const { slug, id } = useParams<{ slug: string; id: string }>();

  const seriesList = seriesBetaWithSlug.items.find((i) => i.slug === slug)

  console.log("Series: ", seriesList);
  
  const images = [
    ...(createImages(show) ?? []),
    ...relationshipImages(show.relationships ?? []),
  ];

  function createBio(c: Character) {
    const base = []
    if (c.status === "Deceased") return [c.birthday, c.hairColor, c.eyeColor, c.residence, c.gender, c.dateOfDeath, c.causeOfDeath]
    

    return [c.birthday, c.hairColor, c.eyeColor, c.residence, c.gender]
  }

  const bio = createBio(character);

  console.log("bio", bio);
  
  
  const convertedCharacter = convertToCharacterInfobox(show, character) as
    | (Character & {
        infobox?: Array<{
          fields?: unknown[];
          posterSrc?: Image;
          posterUrl?: Image;
          imageUrl?: Image;
          name?: string;
          nickname?: string[];
          goesByNickname?: boolean;
          firstName?: string;
          everyEpisode?: boolean,
          
        }>;
        fields?: unknown[];
        posterUrl?: Image;
        imageUrl?: Image;
      })
    | null;

  if (!convertedCharacter) return null;

  const infobox = Array.isArray((convertedCharacter as { infobox?: unknown[] }).infobox)
    ? ((convertedCharacter as { infobox?: Array<{ fields?: unknown[]; posterSrc?: Image; posterUrl?: Image; imageUrl?: Image, episodeCount: string }> }).infobox?.[0] ?? convertedCharacter)
    : convertedCharacter;

  type InfoboxField = {
    label: string;
    info: unknown;
    category?: InfoboxCategory;
  };

  const characterWithInfobox: Character & {
    infobox?: Array<{
      fields?: unknown[];
      posterSrc?: Image;
      posterUrl?: Image;
      imageUrl?: Image;
      name?: string;
      nickname?: string[];
      goesByNickname?: boolean;
      firstName?: string;
    }>;
    fields: InfoboxField[];
    posterUrl?: Image;
    imageUrl?: Image;
  } = {
    ...convertedCharacter,
    ...infobox,
    fields: Array.isArray(infobox?.fields)
      ? (infobox.fields as InfoboxField[])
      : [],
    posterUrl:
      infobox?.posterUrl ??
      convertedCharacter.posterUrl ??
      convertedCharacter.imageUrl,
  };

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

  const modalImages: Image[] = posterUrl
    ? characterImages.some((image) => image.src === posterUrl.src)
      ? characterImages
      : [
          {
            src: posterUrl.src,
            alt: displayName,
            pageId: [character.id],
          },
          ...characterImages,
        ]
    : characterImages;

  const openModal = () => {
    if (!posterUrl) return;
    toggleImage(posterUrl.src, setChosenImage);
    setIsModalOpen(true);
  };

  const fieldsByCategory = new Map<string, InfoboxField[]>();

  for (const field of characterWithInfobox.fields) {
    if (!field) continue;

    const category = field.category ?? "Biography";
    const group = fieldsByCategory.get(category) ?? [];
    group.push(field);
    fieldsByCategory.set(category, group);
  }

  return (
    <section className="flex flex-col justify-content items-center gap-3 bg-[#f2e8ff] text-black shadow-sm shadow-gray-400">
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
        {Array.from(fieldsByCategory, ([category, fields]) => (
          <section key={category}>
            <h3 className="border-b border-gray-500 px-2 py-1 text-xl font-bold text-center text-[#d1c3e3] bg-black">
              {category}
            </h3>
            {(() => {
              const isDeceasedBiography =
                category === "Biography" && character.status === "Deceased";
              const deceasedFields = fields.filter((item) =>
                ["Deceased", "Cause of Death", "Status"].includes(item.label)
              );
              const renderDeceasedRow = () => (
                <section>
                  <header>
                    <h4 className="border-b border-gray-500 px-2 py-1 text-lg font-bold text-center bg-black text-[#d1c3e3]">Deseased</h4>
                  </header>
                <section className="flex flex-row-reverse justify-center gap-2  border-b border-gray-400 pl-1">
                
                  {deceasedFields.map((item) => (
                    <div className="w-full" key={item.label}>
                      <div className="whitespace-nowrap font-semibold">{item.label}</div>
                      <div>{String(item.info)}</div>
                    </div>
                  ))}
                </section>
                </section>
              );
              const regularFields = fields.filter(
                (item) =>
                  !isDeceasedBiography ||
                  !["Deceased", "Cause of Death", "Status"].includes(item.label)
              );
              const hasBirthday = regularFields.some((item) => item.label === "Born");

              return (
                <>
                  {regularFields.map((item) => (
                    <Fragment key={item.label}>
                      <section className="grid grid-cols-10 gap-2 p-2 border-b border-gray-400">
                        <span className="col-span-3 font-semibold">{item.label}</span>

                        <span className="col-span-7">
                          {Array.isArray(item.info) ? (
                            <ul className="flex flex-col gap-2">
                              {item.info.map((line: unknown, i: number) => {
                                if (isOccupation(line)) {
                                  return (
                                    <li
                                      key={`${item.label}-${line.title}-${line.started}-${i}`}
                                      className="leading-snug"
                                    >
                                      <div className="text-sm opacity-80">
                                        {Number(line.started) === Number(line.ended)
                                          ? line.started
                                          : line.ended
                                            ? `${line.started} – ${line.ended}`
                                            : `${line.started} - TBA`}
                                      </div>
                                      <div className="font-medium">
                                        {line.title}
                                        {line.place ? ` — ${line.place}` : ""}
                                      </div>
                                    </li>
                                  );
                                }

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
                      {isDeceasedBiography && item.label === "Born" && renderDeceasedRow()}
                    </Fragment>
                  ))}
                  {isDeceasedBiography && !hasBirthday && renderDeceasedRow()}
                </>
              );
            })()} 
          </section>
        ))}
        <section className="flex justify-center border-b">
           <section className="flex flex-col w-1/2 justify-center items-center">
               <span className="font-bold">First Seen</span>
               <span>{
                 character.everyEpisode === true ? show.pilot 
                   : character.firstEpisode
                 }
                </span>
           </section>
           <section className="flex flex-col border-l w-1/2 justify-center items-center">
              <span className="font-bold">Last Seen</span>
               <span>{
                 character.everyEpisode === true ? show.finaleEpisode 
                   : character.lastEpisode
                 }
                </span>
           </section>
        </section>
        <section className="pl-1 flex pb-1 pt-1">
          <section className="w-1/3 font-bold">Actor</section>
          <section className="w-2/3">{character.actor}</section>
        </section>
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
