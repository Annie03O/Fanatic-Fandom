"use client";
import { Season } from "@/app/models/types/seasons/Season";
import { convertToSeasonInfobox } from "@/app/functions/Convert/convertToSeasonInfobox";
import Link from "next/link";
import { ModalComponent } from "@/app/models/objects/ModalComponent";
import { createImages } from "@/app/models/objects/images";
import { seriesBetaWithSlug } from "@/app/functions/dramaSeriesTop50WithSlug";
import { useState } from "react";
import { toggleImage } from "@/app/functions/toggleImage";
import { Show } from "@/app/models/types/structure/Show";

type Props = { 
  genre:  Genre;
  slug: string;
};


export const SeasonInfobox = ({ genre, slug }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [chosenImage, setChosenImage] = useState<string>("");
  
  const show = seriesBetaWithSlug.items.find((i) => i.slug === slug)


  if (!show) return console.error("Show not found");
  
  if  (show.seasons ===  undefined) return console.error("Season is undefined");
  

  const season = show.seasons.find((i) => i.id)

  if (season === undefined) return console.error("Season with slug: ", slug, " not found" );
  

  const seasonWithInfobox = convertToSeasonInfobox(show);
  const box = seasonWithInfobox?.infobox;

  if (!box) return null;


  if (!show) {
    console.error(`Show not found for slug "${slug}"`);
    return null;
  }

  const images = createImages(show) ?? [];

  const seasonImages = images.filter((img) => img.pageId.includes(season.id));
  const modalImages = seasonImages.some((image) => image.src === box.posterSrc.src)
    ? seasonImages
    : [box.posterSrc, ...seasonImages];

  const openModal = () => {
    toggleImage(box.posterSrc.src, setChosenImage)
    setIsModalOpen(true);
  }


  return (
    <section className="flex flex-col justify-content items-center gap-3 bg-[#d1c3e3] text-black shadow-2xl  shadow-gray-600 ring-2 ring-[#d1c3e3]">
      <h2 className="text-2xl text-centerg">Season {season.seasonNumber}</h2>

      {box.posterSrc.src ? (
        <button
          type="button"
          className="cursor-pointer hover:border-4 hover:border-blue-500 hover:rounded-lg overflow-hidden shadow-lg hover:shadow-none shadow-gray-500"
          onClick={openModal}
          aria-label={`View ${show.title}, ${season.title} Poster`}
        >
          <img className="w-full h-auto" src={box.posterSrc.src} alt={box.posterSrc.alt} />
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
        <section className="flex">
            <section className="flex flex-col w-1/2">
              {season.previousSeason ? (
                <section className="flex flex-col w-full">
                  <label className="font-bold flex justify-start">Previous</label>
                  <Link className="flex justify-start" href={`/${genre}/${slug}/seasons/${season.previousSeason.id}`}>
                    Season {season.previousSeason.seasonNumber}
                  </Link>
                </section>
              ) : ""}
  
          </section>
          <section className="flex flex-col w-1/2">
              {season.nextSeason ? (
                <section className="flex flex-col w-full">
                  <label className="font-bold flex justify-end">Next</label>
                  <Link className="flex justify-end underline hover:text-blue-500" href={`/${genre}/${slug}/seasons/${season.nextSeason.id}`}>
                    Season {season.nextSeason.seasonNumber}
                  </Link>
                </section>
              ) : ""}
  
          </section>
          { isModalOpen === true ? (
            <ModalComponent
             title={season.title ? season.title : `Season ${season.seasonNumber}`}
             images={modalImages}
             imgUrl={chosenImage}
             toggleImage={setChosenImage}
             onClose={() => setIsModalOpen(false)}
             id={season.id}
             type="Season"
          />
        ) : null}
       </section>
      </section>
    </section>
  );
};