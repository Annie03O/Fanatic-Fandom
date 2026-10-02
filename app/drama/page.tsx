"use client";

import ShowPortal from "../components/Show/ShowPortal";
import { seriesBetaWithSlug } from "../functions/dramaSeriesTop50WithSlug";



export const TeenPage = () => {
  return (
      <article className="flex flex-wrap bg-black w-[90%] p-2 gap-10 items-center justify-center">
     
      {seriesBetaWithSlug.items
        .filter((i) => i.tags?.some((tag) => tag.toLowerCase() === "drama" || tag.toLowerCase() === "teen drama" || tag.toLowerCase() === "soap opera"))
        .map((i) => {
        
          return <ShowPortal key={i.slug} show={i} genre={i.genre} title={i.slug}/>
        })}
    </article>
  );
};

export default TeenPage;