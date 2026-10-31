"use client";

import { useParams } from "next/navigation";
import { seriesBetaWithSlug } from "../../functions/WithSlug/allSeriesWithSlug";
import { CharacterInfobox } from "./CharacterInfobox";; 
import { RelationshipsSection } from "../Relationships/RelationshipsSection"; 
import { CharacterArc } from "./CharacterArc";

function Character() {
  const { slug, id } = useParams<{ slug: string; id: string }>();


  // seriesBetaWithSlug är { ...dramaSeries, items: [...] }
  const series = seriesBetaWithSlug.items.find((s) => s.slug === slug);

  if (!series) return <section>Series not found</section>;


  console.log(id);
  

  // Variant A: om mainCharacters ligger direkt på serien
  const character = series.mainCharacters?.find((c) => c.id === id);

  if (character === undefined) return console.error("Character is undefined");

  if (character.firstName === undefined) return console.error("Character firstName is undefined");

  if (character.lastName === undefined) return console.error("Character lastName is undefined");


  document.title = (character?.firstName + " " + character?.lastName)

  
  // Variant B: om serien har show-objekt (vanligt i din struktur)
  // const character = series.show?.mainCharacters?.find((c) => c.id === id);

  if (!character) return <section>Character not found, {character}</section>;
 
  if (character.relationships === undefined) return null;

  return (
    <main className=" md:w-full flex flex-col justify-center items-center text-[#f2e8ff] ">
                <article className="  p-1 flex flex-col ">            
                    
                    <h1 className="text-4xl">{character.firstName  + " " + character.lastName}</h1>
                    <section className=" flex flex-col-reverse md:flex-row w-full ">
                        <section className="w-full flex flex-col gap-2 p-2">
                           <section className="w-full p-2 border-t border-gray-600">
                              <h2 className="text-3xl">Personality</h2>
                              <section className="bg-[#f2e8ff] text-black rounded-md p-3 inset-shadow-sm inset-shadow-gray-400 w-[90%] ">
                                <span >{character.personality}</span>
                              </section>
                           </section>
                           <section className="w-full border-t border-b pb-2 border-gray-400">
                            <section className="text-left w-full flex relative items-center ">
                              <h2 className="text-3xl left-2">Character Arc</h2>
                            </section>
                              <section  className=" h-[450px] overflow-y-scroll">
                                <CharacterArc character={character}/>
                              </section>
                           </section>
                           <section className="flex flex-col justify-center items-center w-full border-b border-gray-600">
                             <h2 className="text-3xl w-full border-b border-gray-600">Relationships</h2>
                           <RelationshipsSection relationships={character.relationships!} show={series} />
                         </section>
                        </section>
                        <section className="border md:w-[50%] lg:w-[30%]">
                             <CharacterInfobox show={series} character={character}/>
                        </section>
                           
                    </section>
                </article>
            </main>
    
  );
}

export default Character;
