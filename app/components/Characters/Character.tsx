"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { seriesBetaWithSlug } from "../../functions/WithSlug/allSeriesWithSlug";
import { CharacterInfobox } from "./CharacterInfobox";; 
import { RelationshipsSection } from "../Relationships/RelationshipsSection"; 
import { CharacterArc } from "./CharacterArc";
import { getCharacterRelationships } from "@/app/models/objects/images";

function Character() {
  const { slug, id } = useParams<{ slug: string; id: string }>();

  const series = seriesBetaWithSlug.items.find((s) => s.slug === slug);
  const character = series?.mainCharacters?.find((c) => c.id === id);
  const characterExists = Boolean(character);
  const firstName = character?.firstName;
  const lastName = character?.lastName;

  useEffect(() => {
    // The title is an external browser side effect, not React state.
    // eslint-disable-next-line react-hooks/immutability
    if (characterExists) document.title = [firstName, lastName].filter(Boolean).join(" ");
  }, [characterExists, firstName, lastName]);

  if (!series) return <section>Series not found</section>;
  if (!character) return <section>Character not found, {id}</section>;
  if (!character.firstName || !character.lastName) {
    return <section>Character name is missing for {id}</section>;
  }
 
  const relationshipList = [
    ...(series.relationships ?? []).filter((relationship) =>
      relationship.characters?.some((person) => person.id === character.id)
    ),
    ...getCharacterRelationships(character),
  ];


  return (
    <main className=" md:w-full flex flex-col justify-center items-center text-[#f2e8ff] ">
                <article className="  p-1 flex flex-col ">            
                    
                    <h1 className="text-4xl">{character.firstName  + " " + character.lastName}</h1>
                    <section className=" flex flex-col-reverse md:flex-row w-full ">
                        <section className="w-[200px]:w-full w-[90%] flex flex-col gap-2 p-2">
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
                           <RelationshipsSection relationships={relationshipList} show={series} />
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
