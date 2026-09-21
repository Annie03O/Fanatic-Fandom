"use client"
import RelatedPortal from "@/app/components/RelatedPortal";
import { dramaSeriesWithSlug } from "@/app/functions/WithSlug/dramaSeriesWithSlug";
import { fantasySeriesWithSlug } from "@/app/functions/WithSlug/fantasySeriesWithSlug";
import { useParams } from "next/navigation";

type Props = {
  genre: "drama" | "kids" | "crime" | "comedy" | "fantasy";
}

export default function AllRelatedPage({genre}: Props) {
    const {slug} = useParams<{slug: string}>();
    
    const series = fantasySeriesWithSlug.items.find((s) => s.slug === slug)
    
    console.log("series", series);
    

    if (!series) return <section>Series not found</section>
        
    
    return (
      <div className="flex flex-col  items-center bg-black w-[90%] min-h-[1000px]"> 
        
        <RelatedPortal title={series.title} show={series} page={true}/>
      </div>
    )
}