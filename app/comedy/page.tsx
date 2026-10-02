"use client";

import ShowPortal from "../components/Show/ShowPortal";
import { seriesBetaWithSlug } from "../functions/dramaSeriesTop50WithSlug";



export const ComedyPage = () => {
  return (
     <article className="flex flex-wrap gap-10 items-center justify-center bg-black p-3">
            {seriesBetaWithSlug.items
              .filter((i) => i.tags?.some((tag) => tag.toLowerCase() === "comedy" || tag.toLowerCase() === "sitcom" ))
              .map((i) => {
      
        
        return <ShowPortal key={i.slug} show={i} genre={i.genre} title={i.slug}/>
      })}
    </article>
  );
};

export default ComedyPage;