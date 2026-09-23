"use client";
import ShowPortal from "../components/ShowPortal";
import { allSeriesWithSlug } from "../functions/dramaSeriesTop50WithSlug";
import { fantasySeriesWithSlug } from "../functions/WithSlug/fantasySeriesWithSlug";



export const FantasyPage = () => {
  return (
    <article className="flex flex-wrap gap-10 items-center justify-center">
     
            {allSeriesWithSlug.items
              .filter((i) => i.tags?.some((tag) => tag.toLowerCase() === "fantasy" || tag.toLowerCase() === "dark fantasy"))
              .map((i) => {
        
        return <ShowPortal show={i} genre={i.genre} title={i.slug}/>
      })}
    </article>
  );
};

export default FantasyPage;