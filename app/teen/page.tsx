"use client";

import Link from "next/link";
import { teenSeriesTop50WithSlug } from "../functions/teenSeriesTop50WithSlug";

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

export const TeenPage = () => {
  return (
    <section className="grid gap-y-10 gap-x-5 grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
      {teenSeriesTop50WithSlug.items.map((i) => {
        const rows = chunk(i. tags, 3); // max 3 tags per rad

        return (
          <Link key={i.slug} href={`/teen/${i.slug}`}>
            <section className="flex justify-center items-center">
              <article className="w-[300px] h-[600px] border rounded-xl">
                <h1 className="text-2xl whitespace-nowrap text-center">
                  {i.title}
                </h1>

                <img
                  className="w-[300px] h-[450px]"
                  src={i.posterUrl}
                  alt={i.title}
                />

                <ul className="p-1">
                  <li>
                    <b>Airing:</b> {i.firstAirDate.slice(0,4)} - {i.lastAirDate.slice(0,4)}
                  </li>

                  {/* Tags */}
                  <li className="mt-2">
                    <div className="flex flex-col gap-2">
                      {rows.map((row, rIdx) => (
                        <div key={rIdx} className="flex gap-2 w-fit">
                          {row.map((t, tIdx) => (
                            <span
                              key={`${t}-${rIdx}-${tIdx}`}
                              className="bg-black text-white rounded-lg whitespace-nowrap px-2 py-0.5"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      ))}
                    </div>
                  </li>
                </ul>
              </article>
            </section>
          </Link>
        );
      })}
    </section>
  );
};

export default TeenPage;
