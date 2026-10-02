"use client";

import { useParams, useRouter } from "next/navigation";
import type { Show } from "../../models/types/structure/Show";
import { getTwoRowSeasLayout as getTwoRowLayout } from "../../functions/getTwoRowSeasLayout";

type Props = { 
  show: Show; 
  page: boolean;
  genre:  Genre; 
};

export const SeasonsPortals = ({ show, page, genre }: Props) => {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();

  const seasons = show?.seasons ?? [];
  // På startsidan: visa max 8 om det finns fler än 10
  const visible =
    page === false && seasons.length > 6 ? seasons.slice(0, 6) : seasons

  //const pushSeason = (id: string) => router.push(`/${genre}/${slug}/seasons/${id}`);

  const colsClass = (n: number) => {
    const cols = Math.max(1, Math.min(5, n)); // clamp 1..8
    return cols === 2
      ? "md:grid-cols-2"
      : cols === 3
      ? "grid-cols-2 min-[1700px]:grid-cols-3"
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
          //onClick={() => pushSeason(s.id!)}
          className="w-fit shadow-xl shadow-gray-600 ring-2 ring-[#d1c3e3]"
        >
          <section className={page === true ? "w-fit flex flex-col " : "flex flex-col-reverse relative"}>
            
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={s.posterUrl}
              alt={`${s.title} `}
              className={`${page === true ? "h-[250px] w-[200px]" : "w-full md:h-[145px] md:w-[100px]"} object-cover object-center blur-xs  transition-all duration-300 ease-in-out`}
            />
            <section className={`text-2xl text-center text-[#d1c3e3] flex flex-col items-center justify-center h-full text-4xl text-shadow-lg text-shadow-gray-600  border-2 border-black
               ${page === false ? "absolute  w-full" : ""}`}>
              {s.seasonNumber != null ? s.seasonNumber : s.title}
            </section>
          </section>
          
        </button>
      ))}
    </section>
  );

  const renderGridFor = (items: typeof visible) => {
    const layout = getTwoRowLayout(items.length);

    console.log("items:", items.length);
    console.log("layout:", layout);


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
    <section className={page ? "w-full flex flex-col justify-center items-center" : "w-full"}>
      <section
        className={
          page
            ? "w-[90%]"
            : "w-full  flex flex-col justify-center items-center"
        }
      >
        <h1 className="text-3xl text-center">The Seasons</h1>

        {/* Om generation finns: rendera gruppvis */}
        { groups ? (
          <section className="w-full mt-6 flex flex-col gap-8">
            {groups.map((g) => (
              <section key={String(g.key)} className="w-full ">
                {renderGridFor(g.items)}
              </section>
            ))}
          </section>) : (
          // Annars: rendera som vanligt
          renderGridFor(visible)
        )}

        {/* VIEW ALL */}
        <section className="flex items-center justify-center mt-4">
          {page === false && seasons.length > 6 ? (
            <button
              className="underline"
              onClick={() => router.push(`/drama/${slug}/seasons`)}
            >
              View All Seasons
            </button>
          ) : null}
        </section>
      </section>
    </section>
  );
};
