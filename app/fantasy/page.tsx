"use client";
import ShowPortal from "../components/ShowPortal";
import { fantasySeriesWithSlug } from "../functions/WithSlug/fantasySeriesWithSlug";



export const FantasyPage = () => {
  return (
    <article className="flex flex-wrap gap-10 items-center justify-center">
     
      {fantasySeriesWithSlug.items.map((i) => {
        
        return <ShowPortal show={i} genre="fantasy" title={i.slug}/>
      })}
    </article>
  );
};

export default FantasyPage;