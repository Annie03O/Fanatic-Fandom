"use client";

import ShowPortal from "../components/ShowPortal";
import { allSeriesWithSlug } from "../functions/dramaSeriesTop50WithSlug";
import { comedySeriesWithSlug } from "../functions/WithSlug/comedySeriesWithSlug";



export const ComedyPage = () => {
  return (
     <article className="flex flex-wrap gap-10 items-center justify-center">
            {allSeriesWithSlug.items
              .filter((i) => i.tags?.some((tag) => tag.toLowerCase() === "comedy" || tag.toLowerCase() === "sitcom" ))
              .map((i) => {
      
        
        return <ShowPortal key={i.slug} show={i} genre="comedy" title={i.slug}/>
      })}
    </article>
  );
};

export default ComedyPage;