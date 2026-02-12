"use client"
import { SeasonsPortals } from "@/app/components/SeasonsPortals";
import { teenSeriesTop50WithSlug } from "@/app/functions/teenSeriesTop50WithSlug";
import { useParams } from "next/navigation";

export default function AllSeasonsPage() {
        const {slug} = useParams<{slug: string}>();
    
        const series = teenSeriesTop50WithSlug.items.find((s) => s.slug === slug)
        
        if (!series) return <section>Series not found</section>
    
    return (
      <SeasonsPortals show={series} page={true}/>
    )
}