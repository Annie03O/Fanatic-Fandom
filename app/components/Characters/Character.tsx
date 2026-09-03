"use client";

import { notFound, useParams } from "next/navigation";
<<<<<<< HEAD
import { teenSeriesTop50WithSlug } from "../../functions/teenSeriesTop50WithSlug";
import { CharacterInfobox } from "./CharacterInfobox ";
import { ShipCard } from "../Relationships/ShipCard";
import { Relationship } from "@/app/models/types/Relationship";
import { RelationshipsSection } from "../Relationships/RelationshipsSection";
import { EpisodeBreakdown } from "@/app/models/types/EpisodeBreakdown";
import { CharacterArc } from "./CharacterArc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faArrowDown, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
=======
import { teenSeriesWithSlug } from "../../functions/WithSlug/teenSeriesWithSlug";
import { CharacterInfobox } from "./CharacterInfobox";; 
import { Relationship } from "@/app/models/types/Relationship";
import { RelationshipsSection } from "../Relationships/RelationshipsSection"; 
import { EpisodeBreakdown } from "@/app/models/types/EpisodeBreakdown";
import { CharacterArc } from "./CharacterArc";
import { useState } from "react";
import { log } from "console";

>>>>>>> 4b79439 (Cleaning worktree)
function Character() {
  const { slug, id } = useParams<{ slug: string; id: string }>();
  const [expand, setExpa] = useState(false);

<<<<<<< HEAD
  // teenSeriesTop50WithSlug är { ...teenSeries, items: [...] }
  const series = teenSeriesTop50WithSlug.items.find((s) => s.slug === slug);

  if (!series) return <section>Series not found</section>;

  // Variant A: om mainCharacters ligger direkt på serien
  const character = series.mainCharacters?.find((c) => c.id === id);

  // Variant B: om serien har show-objekt (vanligt i din struktur)
  // const character = series.show?.mainCharacters?.find((c) => c.id === id);

  if (!character) return notFound();
 
  const grouped = character.relationships!.reduce<Record<string, Relationship[]>>(
=======

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
>>>>>>> 4b79439 (Cleaning worktree)
    (acc, r) => {
      (acc[r.type] ??= []).push(r);
      return acc;
    },
    {}
  );

const sortedTypes = Object.keys(grouped).sort(); // eller din egen ordning

  return (
<<<<<<< HEAD
    <main className="flex flex-col justify-center items-center">
                <section className="bg-black md:w-[90%] p-1 flex flex-col">            
=======
    <main className="flex flex-col justify-center items-center ">
                <section className="bg-black md:w-[90%] p-1 flex flex-col ">            
>>>>>>> 4b79439 (Cleaning worktree)
                    
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
<<<<<<< HEAD
                           <RelationshipsSection relationships={character.relationships!} />
=======
                           <RelationshipsSection relationships={character.relationships} />
>>>>>>> 4b79439 (Cleaning worktree)
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

<<<<<<< HEAD
export default Character;
=======
export default Character;
>>>>>>> 4b79439 (Cleaning worktree)
