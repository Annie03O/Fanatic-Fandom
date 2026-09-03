"use client";

import { notFound, useParams } from "next/navigation";
import { teenSeriesWithSlug } from "../../functions/WithSlug/teenSeriesWithSlug";
import { CharacterInfobox } from "./CharacterInfobox";; 
import { Relationship } from "@/app/models/types/Relationship";
import { RelationshipsSection } from "../Relationships/RelationshipsSection"; 
import { useState } from "react";
import { log } from "console";
import { CharacterArc } from "./CharacterArc";

function Character() {
  const { slug, id } = useParams<{ slug: string; id: string }>();
  const [expand, setExpa] = useState(false);


  // teenSeriesWithSlug är { ...teenSeries, items: [...] }
  const series = teenSeriesWithSlug.items.find((s) => s.slug === slug);

  if (!series) return <section>Series not found</section>;


  console.log(id);
  

  // Variant A: om mainCharacters ligger direkt på serien
  const character = series.mainCharacters?.find((c) => c.id === id);

  
  // Variant B: om serien har show-objekt (vanligt i din struktur)
  // const character = series.show?.mainCharacters?.find((c) => c.id === id);

  if (!character) return <section>Character not found, {character}</section>;
 
  const grouped = (character.relationships ?? []).reduce<Record<string, Relationship[]>>(
    (acc, r) => {
      (acc[r.type] ??= []).push(r);
      return acc;
    },
    {}
  );

const sortedTypes = Object.keys(grouped).sort(); // eller din egen ordning

  return (
    <main className="flex flex-col justify-center items-center ">
                <section className="bg-black md:w-[90%] p-1 flex flex-col ">            
                    
                    <h1 className="text-4xl">{character.firstName  + " " + character.lastName}</h1>
                    <section className=" flex flex-col-reverse md:flex-row border w-full ">
                        <section className="w-full flex flex-col gap-2">
                           <section>
                              <h2 className="text-3xl">Personality</h2>
                              <span>{character.personality}</span>
                           </section>
                           <section className="w-full">
                            <section className="text-left w-full flex relative items-center ">
                              <h2 className="text-3xl left-2">Character Arc</h2>
                            </section>
                              <section  className="h-[450px] overflow-y-scroll">
                                <CharacterArc character={character}/>
                              </section>
                           </section>
                           <section className="w-full">
                             <h2 className="text-3xl">Relationships</h2>
                           <RelationshipsSection relationships={character.relationships!} />
                         </section>
                        </section>
                        <section className="border md:w-[50%] lg:w-[30%]">
                             <CharacterInfobox character={character}/>
                        </section>
                           
                    </section>
                </section>
            </main>
    
  );
}

export default Character;
