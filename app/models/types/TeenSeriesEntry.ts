import { Character } from "./Character";
import { Season } from "./Season";

export type CastMember = {
  actor: string;
  character: string | string[];
  creditOrder?: number; // 1 = toppnamn
  imageUrl?: string;
}; 

export type TeenSeriesEntry = {
  id: string;
  title: string;
  posterUrl?: string;
  tmdbId: string;   // ✅ lägg till
  country: string;
  years: string;
  type: "drama" | "comedy" | "dramedy" | "animated" | "supernatural" | "mystery" | "sci-fi";
  evidence: {
    peakLinearViewersMillions?: number | null;
    market?: "US" | "UK" | "Global" | "AU" | null;
    sourceNote?: string;
  };
  tags: string[];

  // ✅ NYTT
  plot?: string;

  // ✅ NYTT (du kan antingen ha bara namn, eller full info per karaktär)
  mainCharacters?: Character[];

  // ✅ NYTT
  cast?: CastMember[];
};
