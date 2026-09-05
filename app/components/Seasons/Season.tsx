"use client";

import { useParams } from "next/navigation";
import { teenSeriesWithSlug } from "../../functions/WithSlug/teenSeriesWithSlug";
import { CharacterInfobox } from "../Characters/CharacterInfobox"; 
import { Relationship } from "@/app/models/types/Relationship";
import { RelationshipsSection } from "../Relationships/RelationshipsSection"; 
import { CharacterArc } from "../Characters/CharacterArc";
import { SeasonInfobox } from "./SeasonInfobox";

function Season() {
  const { slug, seasonId } = useParams<{ slug: string; seasonId: string }>();


  // teenSeriesWithSlug är { ...teenSeries, items: [...] }
  const series = teenSeriesWithSlug.items.find((s) => s.slug === slug);

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
                                  <section className="flex flex-col border-b p-2">

                                     <section>
                                      <h1 className="text-2xl">{i.episodeTitle}</h1>
                                     </section>
                                     <section className="w-full flex flex-col bg-white text-black">
                                      <section className="w-full border">
                                         <ul className="flex w-full">
                                          <li className="w-1/5 flex justify-center items-center gap-2"><b>Original Release Date:</b></li>
                                          <li className="w-1/5 flex justify-center items-center gap-2"><b>Number of Season</b></li>
                                          <li className="w-1/5 flex justify-center items-center gap-2"><b>Number of Episode</b></li>
                                          <li className="w-1/5 flex justify-center items-center gap-2"><b>Directed by:</b></li>
                                          <li className="w-1/5 flex justify-center items-center gap-2"><b>Written by:</b></li>
                                         </ul>
                                         <ul className="flex w-full">
                                          <li className="w-1/5 flex justify-center items-center gap-2">{i.releaseDate}</li>
                                          <li className="w-1/5 flex justify-center items-center gap-2">{i.seasonNumber}</li>
                                          <li className="w-1/5 flex justify-center items-center gap-2">{i.episodeNumber}</li>
                                          <li className="w-1/5 flex justify-center items-center gap-2"> {i.director}</li>
                                          <li className="w-1/5 flex justify-center items-center gap-2">{i.writer}</li>
                                         </ul>
                                      </section>
                                      <section className="w-full h-[200px] border flex">
                                        <span className="w-4/5 p-1">{i.plot}</span>
                                        <section className="h-full border flex bg-black w-1/5  overflow-hidden ">
                                          <img className="  flex   object-cover object-center" src={i.imageUrl} alt="" />
                                        </section>
                                      </section>
                                       
                                     </section>
                                  </section>
                                )
                                )}
                              </section>
                           </section>
                        </section>
                        <section className="border md:w-[50%] lg:w-[30%]">
                             <SeasonInfobox season={season}/>
                        </section>
                           
                    </section>
                </section>
            </main>
    
  );
}

export default Season;
