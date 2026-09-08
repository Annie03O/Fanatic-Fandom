"use client"
import  SoundtrackPortals  from "@/app/components/Music/SoundtrackPortals"
import { comedySeriesWithSlug } from "@/app/functions/WithSlug/comedySeriesWithSlug";
import { useParams } from "next/navigation";

export default function AllSoundtrack()  {
    const {slug} = useParams<{slug: string}>();
        
        const series = comedySeriesWithSlug.items.find((s) => s.slug === slug)
    
        console.log("series", series);
        
    
        if (!series) return <section>Series not found</section>
       
    return (
        <SoundtrackPortals genre="comedy" show={series} page={true} type="soundtrack"/>
    )
}