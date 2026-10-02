"use client"

import { getTwoRowLayout } from "@/app/functions/getTwoRowLayout";
import { Show } from "@/app/models/types/structure/Show"
import { useParams, useRouter } from "next/navigation";
import { useRef } from "react";

type Props = {
    show: Show;
    page: boolean;
    genre: Genre;
    type: "album" | "soundtrack";
}
const SoundtrackPortals = ({show, page, genre, type}: Props) => {
const { slug } = useParams<{ slug: string }>();
  const router = useRouter();

  const soundtrack = show?.soundtrack ?? [];
  // På startsidan: visa max 8 om det finns fler än 10
  const visible =
    page === false && soundtrack.length > 10 ? soundtrack.slice(0, 8) : soundtrack

const renders = useRef(0);
renders.current += 1;
console.log("SeasonsPortals renders:", renders.current);


  //const pushSoundtrack = (id: string) => router.push(`/drama/${slug}/soundtrack/${id}`);

  const colsClass = (n: number) => {
    const cols = Math.max(1, Math.min(5, n)); // clamp 1..8
    return cols === 2
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

  // Renderar en grid-rad
  const renderRow = (items: typeof visible, cols: number) => (
    <section className={`grid-cols-1 ${gridBase} ${colsClass(cols)} mt-4`}>
      {items.map((s) => (
        <button
          key={s.id}
          type="button"
          //onClick={() => pushSoundtrack(s.id!)}
          className="text-lg hover:text-xl  w-fit rounded-2xl  shadow-lg shadow-gray-400/90 shadow-xl shadow-gray-600 ring-2 ring-[#d1c3e3]ansition-all duration-300 ease-in-out ring-2 overflow-hidden"
        >
          <section className={page === true ? "w-fit flex flex-col " : "flex flex-col-reverse relative md:w-[100px]"}>
            
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={s.imgUrl}
              alt={`${s.noSeason} `}
              className={` object-cover object-center blur-xs  transition-all duration-300 ease-in-out`}
            />
            <section className={`text-2xl text-center text-[#d1c3e3] flex flex-col items-center justify-center h-full text-4xl text-shadow-lg text-shadow-gray-600 border-2 border-black
               ${page === false ? "absolute  w-full" : ""}`}>
              {s.noSeason != null ? s.noSeason : s.noSeason}
            </section>
          </section>
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
    <section className={page ? "w-full flex flex-col justify-center items-center" : " w-full"}>
      <section
        className={
          page
            ? "w-[90%]"
            : "w-full  flex flex-col justify-center items-center"
        }
      >
        <h1 className="text-3xl text-center">Soundtrack</h1>

        {/* Om generation finns: rendera gruppvis */}
        { 
          // Annars: rendera som vanligt
          renderGridFor(visible)
        }

        {/* VIEW ALL */}
        <section className="flex items-center justify-center mt-4">
          {page === false && soundtrack.length > 10 ? (
            <button
              className="underline "
              onClick={() => router.push(`/drama/${slug}/soundtrack`)}
            >
              View All Seasons
            </button>
          ) : null}
        </section>
      </section>
    </section>
  )}
export default SoundtrackPortals;