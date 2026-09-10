"use client"
import  SoundtrackPortals  from "@/app/components/Music/SoundtrackPortals"
import { dramaSeriesWithSlug } from "@/app/functions/WithSlug/dramaSeriesWithSlug";
import { useParams } from "next/navigation";

export default function AllSoundtrack()  {
    const {slug} = useParams<{slug: string}>();
        
        const series = dramaSeriesWithSlug.items.find((s) => s.slug === slug)
        const cast = series?.cast ?? [];
    
        console.log("series", series);
        
    
        if (!series) return <section>Series not found</section>
       
    return (
        <SoundtrackPortals genre="drama" show={series} page={true} type="soundtrack"/>
    )
}