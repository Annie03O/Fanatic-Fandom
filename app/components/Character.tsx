"use client"
import { getCharacterById } from "@/app/functions/getCharacterById";
import { teenSeriesTop50WithSlug } from "@/app/functions/teenSeriesTop50WithSlug";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";


function Character() {
    const {slug, id} = useParams<{slug: string, id: string}>();
    
    const series = teenSeriesTop50WithSlug.find((s) => s.title === slug)
        
    if (!series) return <section>Series not found</section>
    
    
    const character  = series.mainCharacters.find((c) => c.id === id);

    if (!character) return notFound();

    return (
        <section className="grid grid-cols-4 border" >
            {/* Left */}
            <section className="border col-span-3 grid-cols-3">
                <section className="border  col-span-3">
                    <h1 className="text-3xl">{character.firstName + " " + character.lastName}</h1>
                </section>
                
            </section>
            {/* Right */}
            <section className="border">
                <section className="border">

                </section>
            </section>
        </section>
        )
}

export default Character;