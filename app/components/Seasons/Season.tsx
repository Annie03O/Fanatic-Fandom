"use client";

import { useParams } from "next/navigation";
import { allSeriesWithSlug } from "../../functions/WithSlug/allSeriesWithSlug";
import { SeasonInfobox } from "./SeasonInfobox";
import type { Season } from "@/app/models/types/seasons/Season";
import { createImages } from "@/app/models/objects/images";
import { EpisodeBreakdownComponent } from "@/app/models/objects/EpisodeBreakdownComponent";
import { useState } from "react";
import { toggleImage } from "@/app/functions/toggleImage";
import { convertToSeasonInfobox } from "@/app/functions/Convert/convertToSeasonInfobox";
type Props = {
  genre:  Genre;
  season: Season;
};

function Season({genre, season}: Props) {
  const { slug, seasonId } = useParams<{ slug: string; seasonId: string }>();
  const [chosenImage, setChosenImage] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  
  // allSeriesWithSlug är { ...dramaSeries, items: [...] }
  const series = allSeriesWithSlug.items.find((s) => s.slug === slug);

  if (!series) return <section>Series not found</section>;

  const seasonWithInfobox = convertToSeasonInfobox(season);
  const box = seasonWithInfobox?.infobox;

  if (!box) return null;


  const posterUrl = box.posterSrc?.trim();

  const openModal = () => {
    if (posterUrl) toggleImage(posterUrl, setChosenImage);
    setIsModalOpen(true);
  }
  // Variant A: om mainCharacters ligger direkt på serien
    
  // Variant B: om serien har show-objekt (vanligt i din struktur)

  if (!season) return <section>Season not found, {season}</section>;
  const images = createImages(season).filter(
    (image): image is { src: string; alt: string; characterId: string | string[] } => Boolean(image),
  );
  
  return (
    <article key={seasonId} className="flex flex-col justify-center items-center text-[#d1c3e3] w-full">
                <section className="w-full p-1 flex flex-col">            
                    <h1 className="text-4xl">{season.title}</h1>
                    <section className=" flex flex-col-reverse md:flex-row  w-full pl-2">
                        <section className="w-full flex flex-col gap-2">
                           <section className="w-[75%]">
                              <h2 className="text-3xl">Plot</h2>
                              <span>{season.plot}</span>
                           </section>
                           <section className="w-full">
                            <section className="text-left w-full flex relative items-center border-b">
                              <h2 className="text-3xl left-2">Episodes</h2>
                            </section>
                              <section  className="h-1/10 overflow-y-scroll mr-2">
                                {season.episodeBreakdown.map((i, index) => (
                                  <EpisodeBreakdownComponent
                                    key={`${i.id || `episode-${i.seasonNumber}-${i.episodeNumber}`}-${index}`}
                                    season={season}
                                    episode={i}
                                  />
                                )
                                )}
                              </section>
                           </section>
                        </section>
                        <section className="border md:w-[50%] lg:w-[30%]">
                             <SeasonInfobox 
                                images={images} 
                                season={season} 
                                genre={genre} 
                                slug={slug} 
                                chosenImage={chosenImage}
                                toggleImage={setChosenImage}
                                posterUrl={posterUrl ? posterUrl : ""}
                                openModal={openModal}
                                box={box}
                                isModalOpen={isModalOpen}
                                setIsModalOpen={setIsModalOpen}
                              />
                        </section>
                    </section>
                </section>           
            </article>
  );
}

export default Season;
