"use client"
import  SoundtrackPortals  from "@/app/components/Music/SoundtrackPortals"
import { fantasySeriesWithSlug } from "@/app/functions/WithSlug/fantasySeriesWithSlug";
import { useParams } from "next/navigation";

export default function AllSoundtrack()  {
    const {slug} = useParams<{slug: string}>();
        
        const series = fantasySeriesWithSlug.items.find((s) => s.slug === slug)
        
        console.log("series", series);
        
    
        if (!series) return <section>Series not found</section>
       
    return (
        <SoundtrackPortals genre="fantasy" show={series} page={true} type="soundtrack"/>
    )
}