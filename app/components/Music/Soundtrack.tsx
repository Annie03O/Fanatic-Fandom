"use client"

import { dramaSeriesWithSlug } from "@/app/functions/WithSlug/dramaSeriesWithSlug";
import { useParams } from "next/navigation";
import { capitalizeFirstLetter } from "@/app/functions/Format/capitalizeFirstLetter";
import { SoundtrackInfobox } from "./SoundtrackInfobox";

function Soundtrack() {
 const { slug,  soundtrackId} = useParams<{slug: string, soundtrackId: string}>();

 const series = dramaSeriesWithSlug.items.find((s) => s.slug === slug);

 if (!series) return <section>Series not found</section>;

 console.log(soundtrackId);

 const soundtrack = series.soundtrack.find((s) => s.id === soundtrackId);

 if (!soundtrack) return <section>Soundtrack not found</section>


return (
    <main key={series.id} className="flex flex-col justify-center items-center ">
                <section key={soundtrack.id} className="bg-black md:w-[90%] p-1 flex flex-col ">            
                    
                    <h1 className="text-4xl">Music from {series.title} (Season {soundtrack.noSeason})</h1>
                    <section key={slug} className=" flex flex-col-reverse md:flex-row border w-full ">
                        <section className="w-full flex flex-col gap-2">
                           <section className="w-[75%]">
                              <h2 className="text-3xl">Soundtrack</h2>
                              <section className="bg-white text-black text-xl">
                                <header className="flex text-center"> 
                                    <section className="flex border w-1/2 justify-center items-center ">Episode</section>
                                    <section className="flex border w-1/2 justify-center items-center">
                                       <section className="flex border w-1/2 justify-center items-center">Song</section>
                                       <section className="flex border w-1/2 justify-center items-center">Artist</section>
                                    </section>                                
                                </header>
                                                                    {soundtrack.songs.map((s, episodeIndex) => {

                                                                        return <section key={`${s.episodeTitle}-${episodeIndex}`} className="flex border ">
                                        <section className="flex border justify-center items-center w-1/2">
                                            {capitalizeFirstLetter(s.episodeTitle)}
                                        </section>
                                        <section className="flex flex-col border justify-center items-center w-1/2">
                                            {!s.song ? "No songs featured in this episode": s.song.map((i, songIndex) => {
                                                return <section key={`${i.id ?? `${i.title}-${i.artist}`}-${songIndex}`} className="flex w-full border-b">
                                                    <span className="w-full text-center flex  justify-center items-center">
                                                      {capitalizeFirstLetter(i.title)}
                                                    </span>
                                                    <span className="w-full text-center flex  justify-center items-center">
                                                        {capitalizeFirstLetter(i.artist)}
                                                    </span>
                                                </section>
                                            })}
                                        </section>
                                    </section>
                                  })}
                              </section>
                           </section>
                           <section className="w-full border">
                          
                           </section>
                        </section>
                         <section className="border md:w-[50%] lg:w-[20%]">
                            <SoundtrackInfobox soundtrack={soundtrack}/>
                        </section> 
                           
                    </section>
                </section>
            </main>
    
  );
}


export default Soundtrack;