"use client";

import ShowPortal from "../components/ShowPortal";
import { comedySeriesWithSlug } from "../functions/WithSlug/comedySeriesWithSlug";



export const ComedyPage = () => {
  return (
     <article className="flex flex-wrap gap-10 items-center justify-center">
      {comedySeriesWithSlug.items.map((i) => {
        
        return <ShowPortal key={i.slug} show={i} genre="comedy" title={i.slug}/>
      })}
    </article>
  );
};

export default ComedyPage;