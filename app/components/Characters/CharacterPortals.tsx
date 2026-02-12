"use client";

import { useParams, useRouter } from "next/navigation";
import type { Show } from "../../models/types/Show";
import { teenSeriesTop50WithSlug } from "../../functions/teenSeriesTop50WithSlug";
import { getTwoRowCharLayout as getTwoRowLayout } from "../../functions/getTwoRowCharLayout";

type Props = { show: Show; page: boolean };

export const CharacterPortals = ({ show, page }: Props) => {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();

  const series = teenSeriesTop50WithSlug.items.find((s) => s.slug === slug);
  if (!series) return <section>Series not found</section>;

  const mainChars = show?.mainCharacters.filter((c) => c.promo === true) ?? [];

  // På startsidan: visa max 8 om det finns fler än 10
  const visible =
    page === false && mainChars.length > 10 ? mainChars.slice(0, 8) : mainChars;

  const pushCharacter = (id: string) => router.push(`/teen/${series.slug}/${id}`);

  const colsClass = (n: number) => {
    const cols = Math.max(1, Math.min(8, n)); // clamp 1..8
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

  const hasGeneration = visible.some((c) => c.generation != null);

  
  const hasClassOf = visible.some((c) => c.classOf != null);


  const groups = hasGeneration
    ? ([
        {
          key: 1,
          title: "Generation 1",
          items: visible.filter((c) => c.generation === 1),
        },
        {
          key: 2,
          title: "Generation 2",
          items: visible.filter((c) => c.generation === 2),
        },
        {
          key: 3,
          title: "Generation 3",
          items: visible.filter((c) => c.generation === 3),
        },
        {
          key: "other",
          title: "Other",
          items: visible.filter((c) => c.generation == null),
        },
      ] as const).filter((g) => g.items.length > 0)
    : null;

    const classGroups = page === true && hasClassOf
    ? ([
        {
          key: 1,
          title: "Class of 2006",
          items: visible.filter((c) => c.classOf === "2006"),
        },
        {
          key: 2,
          title: "Class of 2007",
          items: visible.filter((c) => c.classOf === "2007"),
        },
        {
          key: 3,
          title: "Class of 2008",
          items: visible.filter((c) => c.classOf === "2008"),
        },
        {
          key: 4,
          title: "Class of 2011",
          items: visible.filter((c) => c.classOf === "2011"),
        },
        {
          key: 5,
          title: "Class of 2013",
          items: visible.filter((c) => c.classOf === "2013"),
        },
        {
          key: 6,
          title: "Class of 2014",
          items: visible.filter((c) => c.classOf === "2014"),
        },{
          key: 7,
          title: "Class of 2015",
          items: visible.filter((c) => c.classOf === "2015"),
        },
        {
          key: 8,
          title: "Class of 2016",
          items: visible.filter((c) => c.classOf === "2016"),
        },
        
        {
          key: 5,
          title: "Class of 2017",
          items: visible.filter((c) => c.classOf === "2017"),
        },
        {
          key: "adults",
          title: "Adults",
          items: visible.filter((c) => c.classOf === "Other"),
        },
        
      ] as const).filter((g) => g.items.length > 0)
    : null; 

  // Renderar en grid-rad
  const renderRow = (items: typeof visible, cols: number) => (
    <section className={`grid-cols-1 ${gridBase} ${colsClass(cols)} mt-4`}>
      {items.map((c) => (
        <button
          key={c.id}
          type="button"
          onClick={() => pushCharacter(c.id!)}
          className="border w-fit"
        >
          <article className={page === true ? "w-fit flex flex-col " : "flex flex-col-reverse relative"}>
            <h2 className={`text-2xl text-center ${page === false ? "absolute bg-black w-full" : ""}`}>
              {c.nickname && c.goesByNickname === true ? c.nickname[0] : c.firstName}
            </h2>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={c.imageUrl}
              alt={`${c.firstName} ${c.lastName}`}
                         className={`${page === true ? "h-[250px] w-[200px]" : "w-[250px] md:h-[200px] md:w-[150px]"} object-cover object-center`}
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
    <section className={page ? "w-full flex flex-col justify-center items-center" : "w-full"}>
      <section
        className={
          page
            ? "w-[90%]"
            : "w-full border flex flex-col justify-center items-center"
        }
      >
        <h1 className="text-3xl text-center">Meet the characters</h1>

        {/* Om generation finns: rendera gruppvis */}
        { classGroups ? (
          <section className="w-full mt-6 flex flex-col gap-8">
            {classGroups.map((g) => (
              <section key={String(g.key)} className="w-full">
                <h2 className="text-2xl font-semibold text-center mb-2">
                  {g.title}
                </h2>
                {renderGridFor(g.items)}
              </section>
            ))}
          </section>) :    groups ? (
          <section className="w-full mt-6 flex flex-col gap-8">
            {groups.map((g) => (
              <section key={String(g.key)} className="w-fit">
                <h2 className="text-2xl font-semibold text-center mb-2">
                  {g.title}
                </h2>
                {renderGridFor(g.items)}
              </section>
            ))}
          </section>
        ) : (
          // Annars: rendera som vanligt
          renderGridFor(visible)
        )}

        {/* VIEW ALL */}
        <section className="flex items-center justify-center mt-4">
          {page === false && mainChars.length > 10 ? (
            <button
              className="underline"
              onClick={() => router.push(`/teen/${slug}/characters`)}
            >
              View All Characters
            </button>
          ) : null}
        </section>
      </section>
    </section>
  );
};
