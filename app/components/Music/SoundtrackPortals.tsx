"use client"

import { getTwoRowLayout } from "@/app/functions/getTwoRowLayout";
import type { Soundtrack } from "@/app/models/types/music/Soundtrack";
import type { Show } from "@/app/models/types/structure/Show";
import { useParams, useRouter } from "next/navigation";

type Props = {
  show: Show;
  page: boolean;
  genre: Genre;
  type: "album" | "soundtrack";
};

const SoundtrackPortals = ({ show, page, genre }: Props) => {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();

  const soundtrack = show.soundtrack ?? [];

  if (!soundtrack.length) {
    return null;
  }

  const visible =
    page === false && soundtrack.length > 10 ? soundtrack.slice(0, 8) : soundtrack;

  const pushSoundtrack = (id: string) => router.push(`/${genre}/${slug}/soundtrack/${id}`);

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

  const renderRow = (items: typeof visible, cols: number) => (
    <section key={`row-${cols}`} className={`grid-cols-1 ${gridBase} ${colsClass(cols)} mt-4`}>
      {items.map((s, index) => {
        const itemKey = s.id ?? `soundtrack-${s.noSeason ?? index}`;

        return (
          <button
            key={itemKey}
            type="button"
            onClick={() => s.id && pushSoundtrack(s.id)}
            className="text-lg hover:text-xl w-fit rounded-2xl shadow-lg shadow-gray-400/90 shadow-xl shadow-gray-600 ring-2 ring-[#d1c3e3] transition-all duration-300 ease-in-out overflow-hidden"
          >
            <section className={page === true ? "w-fit flex flex-col " : "flex flex-col-reverse relative md:w-[100px]"}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.imgUrl}
                alt={`${s.noSeason ?? "Soundtrack"} `}
                className="object-cover object-center blur-xs transition-all duration-300 ease-in-out"
              />
              <section className={`text-2xl text-center text-[#d1c3e3] flex flex-col items-center justify-center h-full text-4xl text-shadow-lg text-shadow-gray-600 border-2 border-black ${page === false ? "absolute w-full" : ""}`}>
                {s.noSeason != null ? s.noSeason : "Soundtrack"}
              </section>
            </section>
          </button>
        );
      })}
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
      <section className={page ? "w-[90%]" : "w-full flex flex-col justify-center items-center"}>
        <h1 className="text-3xl text-center">Soundtrack</h1>
        {renderGridFor(visible)}

        <section className="flex items-center justify-center mt-4">
          {page === false && soundtrack.length > 10 ? (
            <button
              className="underline"
              onClick={() => router.push(`/${genre}/${slug}/soundtrack`)}
            >
              View All Seasons
            </button>
          ) : null}
        </section>
      </section>
    </section>
  );
};

export default SoundtrackPortals;