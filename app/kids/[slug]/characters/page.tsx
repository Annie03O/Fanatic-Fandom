"use client"
import { CharacterPortals } from "@/app/components/Characters/CharactersPortals";
import { teenSeriesWithSlug } from "@/app/functions/WithSlug/teenSeriesWithSlug";
import { Show } from "@/app/models/types/Show";
import { useParams } from "next/navigation";

type Props = {
  genre: "teen" | "kids" | "crime" | "comedy";
}

export default function AllCharacterPage({genre}: Props) {
        const {slug} = useParams<{slug: string}>();
    
    const series = teenSeriesWithSlug.kids.find((s) => s.slug === slug)
    const cast = series?.cast ?? [];

    if (!series) return <section>Series not found</section>
        
    
    return (
      <div className="flex flex-col  items-center bg-black w-[90%] min-h-[1000px]"> 
        
        <CharacterPortals genre="kids" show={series} page={true}/>
      </div>
    )
}