"use client"
import RelatedPortal from "@/app/components/RelatedPortal";
import { teenSeriesWithSlug } from "@/app/functions/WithSlug/teenSeriesWithSlug";
import { useParams } from "next/navigation";

type Props = {
  genre: "teen" | "kids" | "crime" | "comedy";
}

export default function AllRelatedPage({genre}: Props) {
        const {slug} = useParams<{slug: string}>();
    
    const series = teenSeriesWithSlug.items.find((s) => s.slug === slug)
    const cast = series?.cast ?? [];

    console.log("series", series);
    

    if (!series) return <section>Series not found</section>
        
    
    return (
      <div className="flex flex-col  items-center bg-black w-[90%] min-h-[1000px]"> 
        
        <RelatedPortal show={series} page={true}/>
      </div>
    )
}