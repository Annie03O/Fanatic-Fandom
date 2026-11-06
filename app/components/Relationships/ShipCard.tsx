"use client";

import { useEffect, useState } from "react";
import { ModalComponent } from "@/app/models/objects/ModalComponent";
import type { Image } from "@/app/models/types/structure/Image";
import type { Relationship } from "@/app/models/types/structure/Relationship";
import type { Show } from "@/app/models/types/structure/Show";
import { generateLabel } from "@/app/functions/Format/generateLabels";
import { findImageByPageId, relationshipImages, toImage } from "@/app/models/objects/images";

type Props = {
  item: Relationship;
  show: Show;
};

export const ShipCard = ({ item, show }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chosenImage, setChosenImage] = useState("");
  const [shipImg, setShipImg]  = useState("")

  const character = show.mainCharacters.find((i) => i.id);

  if (character === undefined) {
    console.error("Character for relationship was not found", item.id);
    return null;
  }

  const episodeImages = show.seasons?.flatMap((season) => 
    (season.episodeBreakdown ?? []).flatMap((episode) => 
      episode.imageUrl ? [episode.imageUrl] : [],
    )
  ) ?? [];

  const relationshipGallery = relationshipImages(show.relationships); 

  const linkedImage = item.id
    ? findImageByPageId(episodeImages, item.id)
    : undefined;
  const directImage = toImage(item.imgUrl, item.name ?? "Relationship image", item.id);

  if (item.id === undefined) return console.error("Id not found");
  

  const relationshipImage = findImageByPageId(relationshipGallery, item.id)
    ?? (item.imgUrl?.src.trim() ? item.imgUrl : undefined);

  if (relationshipImage === undefined) return console.error("relationshipImage is undefined.");
  
  


  const characterPoster = character.posterUrl ?? character.imageUrl;
  const modalImages: Image[] = [
    ...(relationshipImage ? [relationshipImage] : []),
    ...relationshipImages(character.relationships ?? []),
    ...(characterPoster ? [characterPoster] : []),
  ].filter(
    (image, index, images) =>
      Boolean(image.src) &&
      images.findIndex((candidate) => candidate.src === image.src) === index,
  );

  const openModal = () => {
    if (!relationshipImage?.src) {
      console.error("Couldn't find relationship image", item.id);
      return;
    }

    setChosenImage(relationshipImage.src);
    setIsModalOpen(true);
  };

  if (item.imgUrl === undefined) return console.error("Image not found");
  

  useEffect(() => {
    let imgUrl = "";
    if (item.imgUrl?.card === true) {
      imgUrl = relationshipImage.src;
    } else {
      imgUrl = item.imgUrl ? item.imgUrl.src : "";
    }

    setShipImg(imgUrl)
  })

  return (
    <section className="flex bg-[#f2e8ff] text-black min-h-[310px] h-fit w-full relative mr-1 inset-shadow-sm inset-shadow-gray-600 shadow-md shadow-gray-600 ring-2 ring-[#d1c3e3] rounded-xl overflow-hidden">
      <section className="flex flex-col w-2/3 p-2">
        <section className="flex flex-col gap-2 border-b border-gray-400">
          <h1 className="text-2xl">{item.name}</h1>
        </section>

        <section>
          <header className="text-lg">{generateLabel(item)}</header>
          <span>{item.shortDesc}</span>
        </section>
      </section>

      <section className="w-1/3 flex items-center relative">
        {relationshipImage?.src ? (
          <button
            type="button"
            className="absolute inset-0 cursor-pointer"
            onClick={openModal}
            aria-label={`View image of ${item.name ?? "relationship"}`}
          >
            <img
              className="object-cover object-center h-full w-full md:w-max right-0"
              src={shipImg}
              alt={relationshipImage.alt || `Image of ${item.name ?? "relationship"}`}
            />
          </button>
        ) : null}
      </section>

      {isModalOpen && relationshipImage ? (
        <ModalComponent
          title={`${character.firstName ?? character.label ?? ""} ${character.lastName ?? ""}`.trim() || item.name || "Relationship"}
          imgUrl={chosenImage}
          onClose={() => setIsModalOpen(false)}
          images={modalImages}
          toggleImage={setChosenImage}
          id={item.id ?? item.name ?? "relationship"}
          type="Relationship"
        />
      ) : null}
    </section>
  );
};
