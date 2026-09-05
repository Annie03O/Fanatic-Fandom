"use client";

import Link from "next/link";
import { teenSeriesWithSlug } from "../functions/WithSlug/teenSeriesWithSlug";
import chunk from "../functions/Layout/chunk";
import ShowPortal from "../components/ShowPortal";



export const TeenPage = () => {
  return (
    <section className="grid gap-y-10 gap-x-5 grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
      {teenSeriesWithSlug.items.map((i) => {
        
        return <ShowPortal show={i} genre="teen" title={i.slug}/>
      })}
    </section>
  );
};

export default TeenPage;