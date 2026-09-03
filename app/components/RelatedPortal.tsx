"use client"

import { useParams, useRouter } from "next/navigation"
import { Show } from "../models/types/Show";
import { useRef } from "react";
import { getTwoRowLayout } from "../functions/getTwoRowLayout";

type Props = { 
    show: Show; 
    page: boolean;
};


export const RelatedPortal = ({show, page}: Props) => {
 const { slug } = useParams<{slug: string}>();
 const router = useRouter();

 const related = show?.related ?? [];

 const visible = page === false && related.length > 10 ? related.slice(0,4) : related
 
 console.log("Related" + related);
 
 const renders = useRef(0);
 renders.current += 1;
 
 const pushRelated = (id: string) => router.push(`/teen/${slug}/£${id}`);

  const colsClass = (n: number) => {
    const cols = Math.max(1, Math.min(5, n)); // clamp 1..8
    return cols === 1 
      ? "grid-cols-1"
      : cols === 2
      ? "md:grid-cols-2"
      : cols === 3
      ? "md:grid-cols-3"
      : cols === 4
      ? "md:grid-cols-4"
      : cols === 5
      ? "md:grid-cols-5"
      : cols === 6
      ? "md:grid-cols-6"
      : cols === 8
      ? "md:grid-cols-8"
      : "";
  };

  const gridBase = "grid gap-4 justify-center items-center";

  // Renderar en grid-rad
  const renderRow = (items: typeof visible, cols: number) => (
    <section className={`grid-cols-1 ${gridBase} ${colsClass(cols)} mt-4 flex `}>
      {items.map((r) => (
        <button
          key={r.id}
          type="button"
          onClick={() => pushRelated(r.id!)}
          className="border w-fit "
        >
          <article className={page === true ? "w-fit flex flex-col " : "flex flex-col-reverse relative h-[200px] w-[150px]"}>
            
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={r.posterUrl}
              alt={`${r.id} `}
              className={`${page === true ? "" : "w-[250px] md:h-[200px] md:w-[150px]"}  object-center object-fit`}
            />
          </article>
        </button>
      ))}
    </section>
  );

  const renderGridFor = (items: typeof visible) => {
    const layout = getTwoRowLayout(items.length);

    const top = items.slice(0, layout.splitAt);

    const middle =
      layout.rows === 3 ? items.slice(layout.splitAt, layout.splitAt2) : [];

    const bottom =
      layout.rows === 3
        ? items.slice(layout.splitAt2)
        : layout.rows === 2
        ? items.slice(layout.splitAt)
        : [];

    return (
      <>
        {/* TOP */}
        {top.length > 0 && renderRow(top, layout.topCols)}

        {/* MIDDLE */}
        {layout.rows === 3 &&
          middle.length > 0 &&
          renderRow(middle, layout.middleCols)}

        {/* BOTTOM */}
        {layout.rows === 2 && bottom.length > 0 && renderRow(bottom, layout.bottomCols)}
        {layout.rows === 3 && bottom.length > 0 && renderRow(bottom, layout.bottomCols)}
      </>
    );
  };

  return (
    <section className={page ? "w-full flex flex-col justify-center items-center" : " border w-full"}>
      <section
        className={
          page
            ? "w-[90%]"
            : "w-full border flex flex-col justify-center items-center"
        }
      >
        <h1 className="text-3xl text-center">Related</h1>

        {/* Om generation finns: rendera gruppvis */}
        { 
          // Annars: rendera som vanligt
          renderGridFor(visible)
        }

        {/* VIEW ALL */}
        <section className="flex items-center justify-center mt-4">
          {page === false && related.length > 10 ? (
            <button
              className="underline"
              onClick={() => router.push(`/teen/${slug}/related`)}
            >
              View All Seasons
            </button>
          ) : null}
        </section>
      </section>
    </section>
  )}
export default RelatedPortal;