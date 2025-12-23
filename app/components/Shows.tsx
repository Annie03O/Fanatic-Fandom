"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Page } from "../models/types/Page";
import { get } from "../services/serviceBase";
import type { IOmdbResponse } from "../models/types/IOmdbResponse";

function loadItems(): Page[] {
  if (typeof window === "undefined") return [];
  const raw = localStorage.getItem("items");

  if (!raw || raw === "undefined") return [];

  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    localStorage.removeItem("items");
    return [];
  }
}

export const Shows = () => {
  // ✅ Viktigt för hydration: börja alltid med samma HTML på server + client
  const [tvShows, setTvShows] = useState<Page[]>([]);
  const [error, setError] = useState("");
  const [input, setInput] = useState("");

  const getShows = async (query: string): Promise<Page[]> => {
    const q = query.trim() || input; // fallback så du aldrig skickar s=
    const url = `https://omdbapi.com/?apikey=6d7b3352&s=${encodeURIComponent(q)}`;

    const response = await get<IOmdbResponse>(url);

    return Array.isArray(response.Search) ? response.Search : [];
  };

  // ✅ Läs cache efter mount (ingen hydration mismatch)
  useEffect(() => {
    const cached = loadItems();
    if (cached.length > 0) setTvShows(cached);
  }, []);

  // ✅ Hämta initialt om vi saknar cache
  useEffect(() => {
    const fetchInitial = async () => {
      try {
        const shows = await getShows(input); // input är "" först → fallback "star"
        setTvShows(shows);
        localStorage.setItem("items", JSON.stringify(shows));
      } catch {
        setError("Error getting data from omdb, please try again later");
      }
    };

    if (tvShows.length === 0 && error === "") fetchInitial();
  }, [tvShows.length, error]); // (input behövs inte här)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const shows = await getShows(input);
      setTvShows(shows);
      localStorage.setItem("items", JSON.stringify(shows));
    } catch {
      setError("Error getting data from omdb, please try again later");
    }
  };

  return (
    <section>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="bg-white p-2 text-black"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="bg-black p-2">
          Get
        </button>
      </form>

      <div className="movies">
        {error !== "" ? (
          <div>{error}</div>
        ) : (
          tvShows.map((t) =>
            t.Title.length > 6 ? (
              <div className="movie" key={t.imdbID}>
                <h3>{t.Title}</h3>
                <div className="img-container">
                  <img src={t.Poster} alt={t.Title} />
                </div>
                <Link href={"/movie/" + t.imdbID}>Läs mer...</Link>
              </div>
            ) : (
              <h1 key={t.imdbID}>{t.Title}</h1>
            )
          )
        )}
      </div>
    </section>
  );
};
