"use client";

import { SeasonInfobox } from "./SeasonInfobox";
import { EpisodeBreakdown } from "./Episodes/EpisodeBreakdown";
import type { Season as SeasonData } from "@/app/models/types/seasons/Season";
import { JSX } from "react/jsx-runtime";
import { useMemo, useState } from "react";

type SeasonInfoboxProps = Parameters<typeof SeasonInfobox>[0];

function RenderSeasonInfobox(props: SeasonInfoboxProps): JSX.Element | null {
  return SeasonInfobox(props) as JSX.Element | null;
}

type EpisodeBreakdownProps = Parameters<typeof EpisodeBreakdown>[0];

function RenderEpisodeBreakdown(props: EpisodeBreakdownProps): JSX.Element | null {
  return EpisodeBreakdown(props) as JSX.Element | null;
}

type Props = {
  season: SeasonData;
  genre: Genre;
  slug: string;
};

const EMPTY_EPISODES: SeasonData["episodeBreakdown"] = [];

function Season({ season, genre, slug }: Props) {
  const episodeBreakdownList = season.episodeBreakdown ?? EMPTY_EPISODES;
  const [selectedEpisode, setSelectedEpisode] = useState<number | null>(null);

  const episodes = useMemo(() => {
    const episodeNumbers = episodeBreakdownList.flatMap((episode) =>
      Array.isArray(episode.episodeNumber)
        ? episode.episodeNumber
        : [episode.episodeNumber],
    );
    return Array.from(new Set(episodeNumbers)).sort((a, b) => a - b);
  }, [episodeBreakdownList]);

  const visibleEpisodes = useMemo(() => {
    if (selectedEpisode === null) return episodeBreakdownList;
    return episodeBreakdownList.filter((episode) =>
      Array.isArray(episode.episodeNumber)
        ? episode.episodeNumber.includes(selectedEpisode)
        : episode.episodeNumber === selectedEpisode,
    );
  }, [episodeBreakdownList, selectedEpisode]);

  console.log("visibleEpisodes",visibleEpisodes);
  

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
                              <section  className=" overflow-y-scroll mr-2">
                                <section className="flex flex-col gap-2 relative top-2">
                                  <select
                                    className="w-fit rounded-md border bg-[#f2e8ff] px-3 py-2 text-black"
                                    value={selectedEpisode ?? ""}
                                    onChange={(e) => {
                                      const v = e.target.value;
                                      setSelectedEpisode(v === "" ? null : Number(v))
                                    }}
                                  >
                                    <option value="">All Episodes</option>
                                    {
                                      episodes.map((ep) => (
                                        <option value={Number(ep)} key={Number(ep)}>
                                          Episode {ep}
                                        </option>
                                      ))
                                    }
                                  </select>
                                </section>
                                {visibleEpisodes.map((episode) => {
                                  return (
                                  <RenderEpisodeBreakdown
                                    key={episode.id}
                                    episode={episode}
                                    slug={slug}
                                  />)
                                }
                                )}
                              </section>
                           </section>
                        </section>
                        <section className="border md:w-[50%] lg:w-[25%]">
                              <RenderSeasonInfobox genre={genre} slug={slug} />
                        </section>
                           
                    </section>
                </article>
            </main>
    
  );
}

export default Season;
