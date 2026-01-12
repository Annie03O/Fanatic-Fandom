"use client";

import { SetStateAction, useEffect, useState } from "react";
import Link from "next/link";
import type { IMovieListItem } from "../models/types/Page";

const STORAGE_KEY = "items";

function loadItems(): IMovieListItem[] {
  if (typeof window === "undefined") return [];
  const raw = localStorage.getItem(STORAGE_KEY);

  if (!raw || raw === "undefined") return [];

  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as IMovieListItem[]) : [];
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return [];
  }
}

type Props = {
  getMovies: (query: string) => Promise<IMovieListItem[]>
}

export const Shows = ({getMovies}: Props) => {
  // ✅ Array (du mappar ju!)
  const [movies, setMovies] = useState<IMovieListItem[]>([]);
  const [error, setError] = useState("");
  const [input, setInput] = useState("");

    const apiKey = "ec859d0394c9b557d3f801a5b45a9723";




  // ✅ Läs cache efter mount
  useEffect(() => {
    const cached = loadItems();
    if (cached.length > 0) setMovies(cached);
  }, []);

  const q = input.trim();
  // ✅ Hämta initialt om cache saknas
  useEffect(() => {
    const fetchInitial = async () => {
      try {
        const items = await getMovies(q);
        setMovies(items);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
      } catch {
        setError("Kunde inte hämta filmer, försök igen senare.");
      }
    };

    if (movies.length === 0 && error === "") fetchInitial();
  }, [movies.length, error]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
   
    
  
    try {
      const items = await getMovies(q);
      console.log(q);
      
      setMovies(items);
      console.log(items);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      setError("Kunde inte hämta filmer, försök igen senare.");
    }
  };


  const posterUrl = (path: string | null) =>
    path ? `https://image.tmdb.org/t/p/w500${path}` : "";

  return (
    <section>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="bg-white p-2 text-black"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="(just nu används inte sök)"
        />
        <button type="submit" className="bg-black p-2">
          Get
        </button>
      </form>

      <section className="grid grid-cols-6 gap-4">
        {error ? (
          <div>{error}</div>
        ) : (
          movies.map((m) =>
            m.title.length > 6 ? (
              
             <div className="movie" key={m.id}>
                <h3>{m.title}</h3>

                <div className="bg-black">
                  {m.poster_path ? (
                    <img className="hidden" src={posterUrl(m.poster_path)} alt={m.title} />
                  ) : (
                    <div>Ingen poster</div>
                  )}
                </div>

                <Link href={"/movie/" + m.id}>Läs mer...</Link>
              </div>
            ) : (
              <h1 key={m.id}>{m.title}</h1>
            )
          )
        )}
      </section>
    </section>
  );
};
