import { env } from "node:process";
import { TmdbGenre } from "../models/types/TmdbGenre";
const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzg1OWQwMzk0YzliNTU3ZDNmODAxYTViNDVhOTcyMyIsIm5iZiI6MTc2NjQ5NzcyNS4xODQsInN1YiI6IjY5NGE5ZGJkZjE1OTE0NGIzNWZiMWEzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f1r26Tnzy5y92YB4Y59jg1ebaqtiFM_ORLpKt5dwd84"

export async function getMovie tagsBearer(): Promise<TmdbGenre[]> {
  const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?language=sv-SE`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json;charset=utf-8",
    },
  });

  if (!res.ok) throw new Error(`TMDB error (${res.status})`);
  const data: {  tags: TmdbGenre[] } = await res.json();
  return data. tags;
}
