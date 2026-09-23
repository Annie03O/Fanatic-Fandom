"use client";

import { allSeriesWithSlug } from "../functions/WithSlug/allSeriesWithSlug";;
import ShowPortal from "../components/ShowPortal";



export const TeenPage = () => {
  return (
      <article className="flex flex-wrap gap-10 items-center justify-center">
     
      {allSeriesWithSlug.items
        .filter((i) => i.tags?.some((tag) => tag.toLowerCase() === "drama" || tag.toLowerCase() === "teen drama" || tag.toLowerCase() === "soap opera"))
        .map((i) => {
        
          return <ShowPortal key={i.slug} show={i} genre="drama" title={i.slug}/>
        })}
    </article>
  );
};

export default TeenPage;