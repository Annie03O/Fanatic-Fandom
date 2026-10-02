"use client"
import  SoundtrackPortals  from "@/app/components/Music/SoundtrackPortals"
import { seriesBetaWithSlug } from "@/app/functions/WithSlug/allSeriesWithSlug";
import { useParams } from "next/navigation";

export default function AllSoundtrack()  {
    const {slug} = useParams<{slug: string}>();
        
        const series = seriesBetaWithSlug.items.find((s) => s.slug === slug)
        
        console.log("series", series);
        
    
        if (!series) return <section>Series not found</section>
       
    return (
        <SoundtrackPortals genre="drama" show={series} page={true} type="soundtrack"/>
    )
}