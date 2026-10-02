"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { pickRandom } from "@/app/functions/Layout/pickRandom";
import { SidebarItem } from "@/app/models/types/structure/layouts/SidebarItem";
import { shows } from "@/app/models/objects/shows";
import { characters } from "@/app/models/objects/characters";
import { seasons } from "@/app/models/objects/seasons";
import { seriesBeta } from "@/app/models/objects/allSeries";
import { toRouteSlug } from "@/app/functions/toRouteSlug";

type Props = {
  side: "left" | "right";
};

export const SideBar = ({ side }: Props) => {
  const [items, setItems] = useState<SidebarItem[]>([]);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setItems(
        pickRandom(
          seriesBeta.map((show) => ({
            id: show.id,
            label: show.title,
            context: show.genre,
            image: show.posterUrl,
            href: `/${show.genre}/${toRouteSlug(show.title)}`,

          })), 10));
    },);

    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <aside className={`h-full w-fit flex justify-center border border-[#d1c3e3] p-3 ${side === "left" ? "md:mr-4" : "md:ml-4"}`}>
      <section className="flex flex-col gap-3">
        <span className="text-black text-center text-2xl">
            {side === "left" ? "Recommended" : "Discover More"}
        </span>
        {items.map((item) => (
          <section className="flex flex-col gap-2 bg-black border  shadow-xl shadow-gray-600 hover:shadow-none ring-2 ring-[#d1c3e3] items-center" key={item.id}>
            <Link href={item.href} className="flex border w-[200px] items-center gap-2 text-sm hover:underline">
               
              {item.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <section className="border w-2/3 h-[150px]  overflow-hidden ">
                  <img src={item.image} alt={item.context + " - " + item.label} className="w-full h-full shrink-0 object-cover" />
                </section>
              )}
              <span className=" w-1/2 flex flex-col">
                
                <span className="text-lg text-[#d1c3e3]">{item.label}</span>
              </span>
            </Link>
          </section>
        ))}
      </section>
    </aside>
  );
}

