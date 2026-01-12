"use client";

import { useParams, useRouter } from "next/navigation";
import type { TeenSeriesEntry } from "../models/types/TeenSeriesEntry";
import { teenSeriesTop50WithSlug } from "../functions/teenSeriesTop50WithSlug";
import Link from "next/link";

type Props = { show: Show };

export const CharacterPortals = ({ show }: Props) => {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();

    const series = teenSeriesTop50WithSlug.items.find((s) => s.slug === slug)
        
    if (!series) return <section>Series not found</section>
    
  const mainChars = show?.mainCharacters ?? [];

  const visible = mainChars.length > 8 ? mainChars.slice(0, 8) : mainChars;

  const character = mainChars.find((c) => c.id)

  if (!character) console.error("Character not found");
  

  const pushCharacter = (id: string) => {
    const params = new URLSearchParams();
    params.set("characterId", id)

    router.push(`/teen/${series.slug}/${id}`)
  }

  return (
    <section className="border w-[45%]">
      <h1 className="text-3xl text-center">Meet the characters</h1>

      <section className="grid grid-cols-4 gap-4">
        {visible.map((c) => (
         <button type="submit" onClick={() => pushCharacter(c.id!)}>
         <article key={c.id}>
            <h2 className="text-2xl text-center">{c.firstName}</h2>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={c.imageUrl}
              alt={`${c.firstName} ${c.lastName}`}
              className="h-56 w-56 object-cover object-center"
            />
          </article>
          </button>
        ))}
      </section>

      <section className="flex items-center justify-center">
        {mainChars.length > 8 ? (
          <button
            className="underline"
            onClick={() => router.push(`/teen/${slug}/characters`)}
          >
            View All characters
          </button>
        ) : null}
      </section>
    </section>
  );
};
