"use client";

import { dramaSeriesWithSlug } from "../functions/WithSlug/dramaSeriesWithSlug";;
import ShowPortal from "../components/ShowPortal";



export const TeenPage = () => {
  return (
    <section className="grid gap-y-10 gap-x-5 grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
      {dramaSeriesWithSlug.items.map((i) => {
        
        return <ShowPortal show={i} genre="drama" title={i.slug}/>
      })}
    </section>
  );
};

export default TeenPage;