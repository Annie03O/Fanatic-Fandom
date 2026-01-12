"use client"

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { TmdbGenre, TmdbGenreListResponse } from "../models/types/TmdbGenre";

type Props = {
     tags: TmdbGenre[];
    set tags: Dispatch<SetStateAction<TmdbGenre[]>>
}

export const Filter = ({ tags, set tags}: Props) => {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const run = async () => {
      try {
        setError(null);
        const res = await fetch("/api/ tags/movie");
        const text = await res.text();

        if (!res.ok) throw new Error(text || `Request failed (${res.status})`);

        const data: TmdbGenreListResponse = JSON.parse(text);
        set tags(data. tags);
      } catch (e: any) {
        setError(e?.message ?? "Okänt fel");
      }
    };

    run();
  }, []);

   

    return (
      
      <section className="p-3 flex flex-col items-center justify-center bg-black">
      
      <h1 className="text-3xl">Movie  tags</h1>
    
      <ul className="grid grid-cols-7 bg-black text-lg col-gap-4">
        { tags.map((g) => (
          <li key={g.id} className="border flex items-center justify-center p-1">
            {g.name} ({g.id})
          </li>
        ))}
      </ul>
      </section>

    )
}