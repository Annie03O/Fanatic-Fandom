"use client"

import { useState } from "react";
import { toggleImage } from "@/app/functions/toggleImage";
import { ModalComponent } from "@/app/models/objects/ModalComponent";
import { createImages } from "@/app/models/objects/images";
import { Season } from "@/app/models/types/seasons/Season";
import type { EpisodeBreakdown as Episode } from "@/app/models/types/seasons/episode/EpisodeBreakdown";

type Props = {
    season: Season;
    episode: Episode;
    page?: boolean;
}

const EpisodeBreakdown = ({season, episode} : Props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [chooseImage, setChooseImage] = useState("");
    
    const images = createImages(season).filter(
      (image): image is {src: string; alt: string; characterId: string | string[]} => Boolean(image),
    );

    if (episode === undefined) return console.error("Couldn't find episode for EpisodeBreakdown");
    console.log(episode);
    
    if (episode.episodeImageUrl.src === undefined) return console.error("imageUrl property  is", episode.episodeImageUrl);
    if (episode.episodeImageUrl.src === undefined) return console.error("Couldn't find src for image");
    
    


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
                  <span className="w-4/5 p-1">{episode.plot}</span>
                  <section className="h-full border flex  w-1/5  overflow-hidden ">
                    {episode.episodeImageUrl.src.trim() ? (
                      
                      <button
                        type="button"
                        className="cursor-pointer"
                        onClick={() => {
                          toggleImage(episode.episodeImageUrl.src, setChooseImage);
                          setIsModalOpen(true);
                        }}
                        aria-label={`View ${season.title ?? `Season ${season.seasonNumber}`} poster`}
                      >
                         <img className="flex object-cover object-center" src={episode.episodeImageUrl.src} alt={episode.episodeImageUrl.alt} />
                      </button>
                    ) : null}
                  </section>
                </section>
                {isModalOpen && episode.episodeImageUrl.src ? (
        <ModalComponent
          toggleImage={setChooseImage}
          images={images}
          imgUrl={chooseImage}
          title={season.title ?? `Season ${season.seasonNumber}`}
          onClose={() => setIsModalOpen(false)}
          type="Episode"
          id={episode.id}
        />
      ) : null}
                 
               </section>
                                  </section>
}

export default EpisodeBreakdown;