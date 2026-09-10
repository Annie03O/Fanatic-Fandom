"use client";

import { useParams } from "next/navigation";
import { dramaSeriesWithSlug } from "../../functions/WithSlug/dramaSeriesWithSlug";
import { SeasonInfobox } from "./SeasonInfobox";
import { EpisodeBreakdown } from "./Episodes/EpisodeBreakdown";

function Season() {
  const { slug, seasonId } = useParams<{ slug: string; seasonId: string }>();


  // dramaSeriesWithSlug är { ...dramaSeries, items: [...] }
  const series = dramaSeriesWithSlug.items.find((s) => s.slug === slug);

  if (!series) return <section>Series not found</section>;


  console.log(seasonId);
  

  // Variant A: om mainCharacters ligger direkt på serien
  const season = series.seasons?.find((s) => s.id === seasonId);

  
  // Variant B: om serien har show-objekt (vanligt i din struktur)
  // const character = series.show?.mainCharacters?.find((c) => c.id === id);

  if (!season) return <section>Season not found, {season}</section>;


  return (
    <main className="flex flex-col justify-center items-center ">
                <section className="bg-black md:w-[90%] p-1 flex flex-col ">            
                    <h1 className="text-4xl">{season.title}</h1>
                    <section className=" flex flex-col-reverse md:flex-row border w-full ">
                        <section className="w-full flex flex-col gap-2">
                           <section className="w-[75%]">
                              <h2 className="text-3xl">Plot</h2>
                              <span>{season.plot}</span>
                           </section>
                           <section className="w-full border">
                            <section className="text-left w-full flex relative items-center border-b">
                              <h2 className="text-3xl left-2">Episodes</h2>
                            </section>
                              <section  className="h-[1050px] overflow-y-scroll">
                                {season.episodeBreakdown.map((i) => (
                                  <EpisodeBreakdown episode={i}/>
                                )
                                )}
                              </section>
                           </section>
                        </section>
                        <section className="border md:w-[50%] lg:w-[20%]">
                             <SeasonInfobox season={season}/>
                        </section>
                           
                    </section>
                </section>''
            </main>
    
  );
}

export default Season;
