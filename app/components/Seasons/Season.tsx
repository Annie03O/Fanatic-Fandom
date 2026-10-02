"use client";

import { useParams } from "next/navigation";
import { seriesBetaWithSlug } from "../../functions/WithSlug/allSeriesWithSlug";
import { SeasonInfobox } from "./SeasonInfobox";
import { EpisodeBreakdown } from "./Episodes/EpisodeBreakdown";

type Props = {
  genre:  Genre;
};
function Season({genre}: Props) {
  const { slug, seasonId } = useParams<{ slug: string; seasonId: string }>();


  // seriesBetaWithSlug är { ...dramaSeries, items: [...] }
  const series = seriesBetaWithSlug.items.find((s) => s.slug === slug);

  if (!series) return <section>Series not found</section>;

  console.log(seasonId);
  

  // Variant A: om mainCharacters ligger direkt på serien
  const season = series.seasons?.find((s) => s.id === seasonId);

  
  // Variant B: om serien har show-objekt (vanligt i din struktur)
  // const character = series.show?.mainCharacters?.find((c) => c.id === id);

  if (!season) return <section>Season not found, {season}</section>;

  
  return (
    <main className="flex flex-col justify-center items-center text-[#d1c3e3] md:w-[70%]">
                <article className="bg-black  p-1 flex flex-col">            
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
                                {season.episodeBreakdown.map((i) => (
                                  <EpisodeBreakdown episode={i}/>
                                )
                                )}
                              </section>
                           </section>
                        </section>
                        <section className="border md:w-[50%] lg:w-[30%]">
                             <SeasonInfobox season={season} genre={genre} slug={slug} />
                        </section>
                           
                    </section>
                </article>
            </main>
    
  );
}

export default Season;
