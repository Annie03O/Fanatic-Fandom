"use client"

import { dramaSeriesWithSlug } from "@/app/functions/WithSlug/dramaSeriesWithSlug";
import { useParams } from "next/navigation";
import { SoundtrackInfobox } from "./SoundtrackInfobox";
import { SoundtrackBreakDown } from "./SoundtrackBreakdown";

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
                                <SoundtrackBreakDown songs={soundtrack.songs}/>
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