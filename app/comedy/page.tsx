"use client";

import ShowPortal from "../components/ShowPortal";
import { comedySeriesWithSlug } from "../functions/WithSlug/comedySeriesWithSlug";



export const ComedyPage = () => {
  return (
    <article className="grid gap-y-10 gap-x-5 grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
      {comedySeriesWithSlug.items.map((i) => {
        
        return <ShowPortal key={i.slug} show={i} genre="comedy" title={i.slug}/>
      })}
    </article>
  );
};

export default ComedyPage;