"use client";
import Link from "next/link";
import { useState } from "react";
import { ModalComponent } from "@/app/models/objects/ModalComponent";
import { Box } from "@/app/models/types/structure/Box";
import { createImages } from "@/app/models/objects/images";
import { Show } from "@/app/models/types/structure/Show";
import { toggleImage } from "@/app/functions/toggleImage";


type Props = { 
  show: Show 
  genre:  Genre;
  slug: string;
  posterUrl: string;
  box: Box;
};


export const SeasonInfobox = ({ show, genre, slug, posterUrl, box }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chosenImage, setChosenImage] = useState<string>("");
  
  if (show === null) return null;

  const images = createImages(show) ?? [];

  if (show.seasons === null) return console.error("Object for season not found in SeasonInfobox");;

  const season = show.seasons?.find((s) => s.id);

  if (season === undefined) return console.error("Season id is undefined");
  
  
  const openModal = () => {
    console.log("Du klickade på openModal");
    
    if (posterUrl) {
      toggleImage(posterUrl, setChosenImage)
    } else {
      console.error("Couldn't find posterUrl");
      
    };
    setIsModalOpen(true);
  }
  
  return (
    <section className="flex flex-col justify-content items-center gap-3 bg-[#d1c3e3] text-black shadow-2xl  shadow-gray-600 ring-2 ring-[#d1c3e3]">
      <h2 className="text-2xl text-center">Season {season.seasonNumber}</h2>
      {posterUrl ? (
        <button
          type="button"
          className="cursor-pointer"
          onClick={openModal}
          aria-label={`View ${season.title ?? `Season ${season.seasonNumber}`} poster`}
        >
          <img className="w-full h-auto" src={posterUrl} alt={box.name ?? ""} />
        </button>
      ) : null}
      <section className="border-t border-gray-400 text-lg">
        {box.fields.map((f) => (
          <section className="grid grid-cols-2 w-full p-1" key={f!.label}>
            <section className=" cols-start-1 cols-span-2">{f!.label}</section>{" "}
            <section className="cols-span-1">
              {
              Array.isArray(f!.info) 
               ? f!.info.map((item, i) => ( 
                 <span key={i}>{ item}
                 
                 <br />
                 </span>
                 
               ))  
               : f!.info}
               </section>
          </section>
        ))}
        <section className="flex pl-2 pr-2">
          {season.previousSeason ? 
          <section className="w-1/2">Previous</section> 
          : ""
          }
          <section className={
            `
              ${
                season.nextSeason ? 
                "w-full" 
                : "w-1/2"
                } 
                flex justify-end`}> 
                Next
            </section>
        </section>
        <section className="flex  pl-2 pr-2">
          {season.previousSeason ?
           <Link className="w-1/2" href={`/${genre}/${slug}/seasons/${season.previousSeason.id}`}>
             Season {season.previousSeason?.seasonNumber}
            </Link> : ""}
          <section className={`w-full flex justify-end`}> Season {season.nextSeason?.seasonNumber}</section>
        </section>
      </section>
      {isModalOpen && posterUrl ? (
        <ModalComponent
          toggleImage={setChosenImage}
          images={images}
          imgUrl={chosenImage}
          title={season.title ?? `Season ${season.seasonNumber}`}
          onClose={() => setIsModalOpen(false)}
          id={season.id}
          type="Season"
        
        />
      ) : null}
    </section>
  );
};