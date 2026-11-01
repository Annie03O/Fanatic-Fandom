"use client";

import { SeasonInfobox } from "./SeasonInfobox";
import { EpisodeBreakdown } from "./Episodes/EpisodeBreakdown";
import type { Season as SeasonData } from "@/app/models/types/seasons/Season";

type Props = {
  season: SeasonData;
  genre: Genre;
  slug: string;
};

function Season({ season, genre, slug }: Props) {
  return (
    <main className="flex flex-col justify-center items-center text-[#d1c3e3] w-full">
                <article className="w-full p-1 flex flex-col">            
                    <h1 className="text-4xl">{season.title}</h1>
                    <section className=" flex flex-col-reverse md:flex-row  w-full pl-2">
                        <section className=" flex flex-col gap-2 w-full">
                           <section className="w-[75%]">
                              <h2 className="text-3xl">Plot</h2>
                              <span>{season.plot}</span>
                           </section>
                           <section className="w-full">
                            <section className="text-left w-full flex relative items-center border-b">
                              <h2 className="text-3xl left-2">Episodes</h2>
                            </section>
                              <section  className="h-1/10 overflow-y-scroll mr-2">
                                {season.episodeBreakdown.map((episode, index) => (
                                  <EpisodeBreakdown
                                    key={`${season.id}-${episode.id || "episode"}-${index}`}
                                    episode={episode}
                                  />
                                )
                                )}
                              </section>
                           </section>
                        </section>
                        <section className="border md:w-[50%] lg:w-[25%]">
                             <SeasonInfobox season={season} genre={genre} slug={slug} />
                        </section>
                           
                    </section>
                </article>
            </main>
    
  );
}

export default Season;
