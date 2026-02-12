"use client"
import { CharacterPortals } from "@/app/components/Characters/CharacterPortals";
import { teenSeriesTop50WithSlug } from "@/app/functions/teenSeriesTop50WithSlug";
import { useParams } from "next/navigation";

export default function AllCharacterPage() {
        const {slug} = useParams<{slug: string}>();
    
        const series = teenSeriesTop50WithSlug.items.find((s) => s.slug === slug)
        
        if (!series) return <section>Series not found</section>
    
    return (
      <CharacterPortals show={series} page={true}/>
    )
}