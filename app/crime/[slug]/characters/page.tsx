"use client"
import { CharacterPortals } from "@/app/components/Characters/CharactersPortals";
import { dramaSeriesWithSlug } from "@/app/functions/WithSlug/dramaSeriesWithSlug";
import { Show } from "@/app/models/types/Show";
import { useParams } from "next/navigation";

type Props = {
  genre: "drama" | "kids" | "crime" | "comedy";
}

export default function AllCharacterPage({genre}: Props) {
        const {slug} = useParams<{slug: string}>();
    
    const series = dramaSeriesWithSlug.items.find((s) => s.slug === slug)
    const cast = series?.cast ?? [];

    console.log("series", series);
    

    if (!series) return <section>Series not found</section>
        
    
    return (
      <div className="flex flex-col  items-center bg-black w-[90%] min-h-[1000px]"> 
        
        <CharacterPortals genre="drama" show={series} page={true}/>
      </div>
    )
}