"use client";

import { useEffect, useState } from "react";
import type { TmdbGenre, TmdbGenreListResponse } from "../models/types/TmdbGenre";
import { Shows } from "../components/Shows";
import { Filter } from "../components/Filter";
import type { IMovieListItem } from "../models/types/Page";
import { apiKey } from "../functions/getMovies tags";

type TmdbListResponse = { results: IMovieListItem[] };

export default function  tagsPage() {
  const [ tags, set tags] = useState<TmdbGenre[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        setError(null);
        const res = await fetch(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=sv-SE`,
          { cache: "no-store" }
        );
        if (!res.ok) throw new Error(`TMDB error (${res.status})`);
        const data: TmdbGenreListResponse = await res.json();
        set tags(data. tags);
      } catch (e: any) {
        setError(e?.message ?? "Okänt fel");
      }
    })();
  }, []);

  const getMovies = async (query: string): Promise<IMovieListItem[]> => {
    const q = query.trim();

    const url =
      q.length > 0
        ? `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=sv-SE&query=${encodeURIComponent(q)}`
        : `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=sv-SE`;

    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch movie data");

    const data = (await res.json()) as TmdbListResponse;
    return Array.isArray(data.results) ? data.results : [];
  };

  return (
    <main>
      {error && <p>{error}</p>}
      <Filter  tags={ tags} set tags={set tags}/>
      <Shows getMovies={getMovies} />
    </main>
  );
}
