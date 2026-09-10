"use client"
import RelatedPortal from "@/app/components/RelatedPortal";
import { comedySeriesWithSlug } from "@/app/functions/WithSlug/comedySeriesWithSlug";
import { useParams } from "next/navigation";

type Props = {
  genre: "drama" | "kids" | "crime" | "comedy";
}

export default function AllRelatedPage({genre}: Props) {
    const {slug} = useParams<{slug: string}>();
    
    const series = comedySeriesWithSlug.items.find((s) => s.slug === slug)
    const cast = series?.cast ?? [];

    console.log("series", series);
   
    const related = series?.related?.find((t) => t.title);

    if (!series || !related) return <section>Series not found</section>
        
    
    return (
      <div className="flex flex-col  items-center bg-black w-[90%] min-h-[1000px]"> 
        
        <RelatedPortal title={related.title ?? ""} show={series} page={true}/>
      </div>
    )
}