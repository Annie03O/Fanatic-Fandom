"use client";

import { useParams, useRouter } from "next/navigation";
import type { Show } from "../models/types/Show";
import { teenSeriesTop50WithSlug } from "../functions/teenSeriesTop50WithSlug";
import { getTwoRowSeasLayout as getTwoRowLayout } from "../functions/getTwoRowSeasLayout";
import { useEffect, useRef } from "react";

type Props = { show: Show; page: boolean };

export const SeasonsPortals = ({ show, page }: Props) => {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();

  


  const series = teenSeriesTop50WithSlug.items.find((s) => s.slug === slug);
  if (!series) return <section>Series not found</section>;

  const seasons = series.seasons ?? [];

  // På startsidan: visa max 8 om det finns fler än 10
  const visible =
    page === false && seasons.length > 10 ? seasons.slice(0, 8) : seasons

const renders = useRef(0);
renders.current += 1;
console.log("SeasonsPortals renders:", renders.current);

useEffect(() => {
  console.log("visible length:", visible.length);
}, [visible.length]);


  const pushSeason = (id: string) => router.push(`/teen/${series.slug}/${id}`);

  const colsClass = (n: number) => {
    const cols = Math.max(1, Math.min(5, n)); // clamp 1..8
    return cols === 1 
      ? "grid-cols-1"
      : cols === 2
      ? "md:grid-cols-2"
      : cols === 3
      ? "md:grid-cols-3"
      : cols === 4
      ? "md:grid-cols-2 lg:grid-cols-4"
      : cols === 5
      ? "md:grid-cols-5"
      : cols === 6
      ? "md:grid-cols-6"
      : cols === 8
      ? "md:grid-cols-8"
      : "";
  };

  const gridBase = "grid gap-4 justify-items-center";

  const hasGeneration = visible.some((s) => s.generation != null);

  const groups = hasGeneration
    ? ([
        {
          key: 1,
          title: "Generation 1",
          items: visible.filter((s) => s.generation === 1),
        },
        {
          key: 2,
          title: "Generation 2",
          items: visible.filter((s) => s.generation === 2),
        },
        {
          key: 3,
          title: "Generation 3",
          items: visible.filter((s) => s.generation === 3),
        },
        {
          key: "other",
          title: "Other",
          items: visible.filter((s) => s.generation == null),
        },
      ] as const).filter((g) => g.items.length > 0)
    : null;

  // Renderar en grid-rad
  const renderRow = (items: typeof visible, cols: number) => (
    <section className={`grid-cols-1 ${gridBase} ${colsClass(cols)} mt-4`}>
      {items.map((s) => (
        <button
          key={s.id}
          type="button"
          onClick={() => pushSeason(s.id!)}
          className="border w-fit"
        >
          <article className={page === true ? "w-fit flex flex-col " : "flex flex-col-reverse relative"}>
            
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={s.posterUrl}
              alt={`${s.title} `}
              className={`${page === true ? "h-[250px] w-[200px]" : "w-[250px] md:h-[200px] md:w-[150px]"} object-cover object-center`}
            />
          </article>
          <section className="text-lg">Season {s.seasonNumber}</section>
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
        <h1 className="text-3xl text-center">The Seasons</h1>

        {/* Om generation finns: rendera gruppvis */}
        { groups ? (
          <section className="w-full mt-6 flex flex-col gap-8">
            {groups.map((g) => (
              <section key={String(g.key)} className="w-full">
                {renderGridFor(g.items)}
              </section>
            ))}
          </section>) : (
          // Annars: rendera som vanligt
          renderGridFor(visible)
        )}

        {/* VIEW ALL */}
        <section className="flex items-center justify-center mt-4">
          {page === false && seasons.length > 10 ? (
            <button
              className="underline"
              onClick={() => router.push(`/teen/${slug}/seasons`)}
            >
              View All Seasons
            </button>
          ) : null}
        </section>
      </section>
    </section>
  );
};
