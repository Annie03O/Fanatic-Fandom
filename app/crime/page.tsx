"use client";

import Link from "next/link";
import { crimeSeriesWithSlug } from "../functions/WithSlug/crimeSeriesWithSlug";


export const CrimePage = () => {
  return (
    <section className="grid gap-y-10 gap-x-5 grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
      {crimeSeriesWithSlug.items.map((i) => {
        return (
          <Link key={i.slug} href={`/crime/${i.slug}`}>
            <section className="flex justify-center items-center ">
              <article className="w-[300px] h-[600px] border rounded-xl bg-purple-300 flex flex-col justify-center gap-2 p-1">
                <h1 className="text-xl whitespace-nowrap text-center">
                  {i.title}</h1>

                {i.posterUrl && (
                  <img
                    className="w-[300px] h-[450px]"
                    src={i.posterUrl}
                    alt={i.title}
                  />
                )}

                <ul className="p-1">
                  <li>
                    {i.firstAirDate && i.lastAirDate
                      ? `${i.firstAirDate.slice(-4)} - ${i.lastAirDate.slice(-4)}`
                      : `${i.country} - ${i.language}`}
                  </li>

                  {/* Tags */}
                  <li className="mt-2">
                    <div className="flex flex-wrap gap-2">
                      {i.tags?.map((t, idx) => (
                        <span
                          key={`${t}-${idx}`}
                          className="bg-black text-white rounded-lg whitespace-nowrap px-2 py-0.5"
                        >
                          {t}
                        </span>
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

export default CrimePage;