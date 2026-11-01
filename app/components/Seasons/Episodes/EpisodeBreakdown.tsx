"use client"

import { seriesBetaWithSlug } from "@/app/functions/dramaSeriesTop50WithSlug";
import { toggleImage } from "@/app/functions/toggleImage";
import { createImages } from "@/app/models/objects/images";
import { ModalComponent } from "@/app/models/objects/ModalComponent";
import { EpisodeBreakdown as Episode } from "@/app/models/types/seasons/episode/EpisodeBreakdown"
import { useState } from "react";

type Props = {
    episode: Episode;
    page?: boolean;
    slug: string;
}

export const EpisodeBreakdown = ({episode, page, slug} : Props) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [chosenImage, setChosenImage] = useState<string>("");

    
      const show = seriesBetaWithSlug.items.find((i) => i.slug === slug)
    
      if (!show) {
        console.error(`Show not found for slug "${slug}"`);
        return null;
      }
    
      const images = createImages(show) ?? [];


      const season = show.seasons?.find((i) => i.id)

      if (season === undefined) return console.error("Season not found");
    
      const seasonImages = images.filter((img) => img.pageId.includes(season.id));

      const modalImages = seasonImages.some((image) => image.src === season.posterUrl.src)
    ? seasonImages
    : [season.posterUrl, ...seasonImages];


    const openModal = () => {
        toggleImage(season.posterUrl.src, setChosenImage)
        setIsModalOpen(true);
    }
    return <section className="flex flex-col border-b p-2 text-[#d1c3e3]">
               <section>
                  <h1 className="text-2xl">{episode.episodeTitle}</h1>
               </section>
               <section className="w-full flex flex-col  bg-[#d1c3e3] text-black">
                <section className="w-full border">
                   <ul className="flex w-full">
                    <li className="w-1/5 flex justify-center items-center gap-2"><b>Original Release Date:</b></li>
                    <li className="w-1/5 flex justify-center items-center gap-2"><b>Number of Season</b></li>
                    <li className="w-1/5 flex justify-center items-center gap-2"><b>Number of Episode</b></li>
                    <li className="w-1/5 flex justify-center items-center gap-2"><b>Directed by:</b></li>
                    <li className="w-1/5 flex justify-center items-center gap-2"><b>Written by:</b></li>
                   </ul>
                   <ul className="flex w-full">
                    <li className="w-1/5 flex justify-center items-center gap-2">{episode.releaseDate}</li>
                    <li className="w-1/5 flex justify-center items-center gap-2">{episode.seasonNumber}</li>
                    <li className="w-1/5 flex justify-center items-center gap-2">{episode.episodeNumber}</li>
                    <li className="w-1/5 flex justify-center items-center gap-2"> {episode.director}</li>
                    <li className="w-1/5 flex justify-center items-center gap-2">{episode.writtenBy}</li>
                   </ul>
                </section>
                <section className="w-full h-[200px] border flex">
                  <span className={`${episode.imageUrl.src ? "w-4/5" : "w-full"} p-1`}>{episode.plot}</span>
                  {episode.imageUrl.src ? (
                    <button onClick={openModal} className="h-full border flex w-1/5 overflow-hidden cursor-pointer">
                      <img className="flex object-cover object-center" src={episode.imageUrl.src} alt={episode.imageUrl.alt} />
                    </button>
                  ) : null}
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
}