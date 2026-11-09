"use client";
import { Season } from "@/app/models/types/seasons/Season";
import { convertToSeasonInfobox } from "@/app/functions/Convert/convertToSeasonInfobox";
import Link from "next/link";
import { ModalComponent } from "@/app/models/objects/ModalComponent";
import { createImages } from "@/app/models/objects/images";
import { seriesBetaWithSlug } from "@/app/functions/dramaSeriesTop50WithSlug";
import { useState } from "react";
import { toggleImage } from "@/app/functions/toggleImage";
import { InfoField } from "@/app/models/types/structure/InfoboxCategory";

type Props = {
  genre:  Genre;
  slug: string;
  season: Season;
};


export const SeasonInfobox = ({ genre, slug, season }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [chosenImage, setChosenImage] = useState<string>("");
  
  const show = seriesBetaWithSlug.items.find((i) => i.slug === slug)


  if (!show) return console.error("Show not found");
  
  if  (show.seasons ===  undefined) return console.error("Season is undefined");
  

  const seasonWithInfobox = convertToSeasonInfobox(show, season);
  const box = seasonWithInfobox?.infobox;

  if (!box) return null;


  if (!show) {
    console.error(`Show not found for slug "${slug}"`);
    return null;
  }

  const images = createImages(show) ?? [];

  const seasonImages = images.filter((img) => img.pageId.includes(season.id));
  const modalImages = seasonImages.some((image) => image.src === box.posterSrc)
    ? seasonImages
    : seasonImages.length > 0
      ? seasonImages
      : box.posterSrc;

  const openModal = () => {
    toggleImage(box.posterSrc, setChosenImage)
    setIsModalOpen(true);
  }

  const fieldsByCategory = new Map<string, InfoField[]>();

  for (const field of box.fields) {
    if (!field) continue;

    const category = field.category ?? "General";
    const group = fieldsByCategory.get(category) ?? [];
    group.push(field);
    fieldsByCategory.set(category, group);
  }


  return (
    <section className="flex flex-col justify-content items-center gap-3 bg-[#d1c3e3] text-black shadow-2xl  shadow-gray-600 ring-2 ring-[#d1c3e3]">
      <h2 className="text-2xl text-centerg">Season {season.seasonNumber}</h2>

      {box.posterSrc ? (
        <button
          type="button"
          className="cursor-pointer hover:border-4 hover:border-blue-500 hover:rounded-lg overflow-hidden shadow-lg hover:shadow-none shadow-gray-500"
          onClick={openModal}
          aria-label={`View ${show.title}, ${season.title} Poster`}
        >
          <img className="w-full h-auto" src={box.posterSrc} alt={box.posterSrc} />
        </button>
      ) : null}

      <section className="border-t border-gray-400 text-lg">
        {Array.from(fieldsByCategory, ([category, fields]) => (
          <section key={category}>
            <h3 className="border-b border-gray-500 px-2 py-1 text-xl font-bold text-center text-[#d1c3e3] bg-black">
              {category}
            </h3>
            {fields.map((f) => (
              <section className="grid grid-cols-10 gap-2 p-2 border-b border-gray-400" key={f!.label}>
                <span className="col-span-3 font-semibold">{f!.label}</span>
                <span className="col-span-7">
                  {Array.isArray(f!.info)
                    ? f!.info.map((item, i) => (
                        <span key={i}>
                          {String(item)}
                          <br />
                        </span>
                      ))
                    : f!.info}
                </span>
              </section>
            ))}
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