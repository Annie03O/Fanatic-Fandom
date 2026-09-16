"use client";

import { dramaSeriesWithSlug } from "../functions/WithSlug/dramaSeriesWithSlug";;
import ShowPortal from "../components/ShowPortal";



export const TeenPage = () => {
  return (
    <article className="flex flex-wrap gap-10 items-center justify-center">
     
      {dramaSeriesWithSlug.items.map((i) => {
        
        return <ShowPortal show={i} genre="drama" title={i.slug}/>
      })}
    </article>
  );
};

export default TeenPage;