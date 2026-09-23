

import { Season } from "./Season";
import { CastMember } from "./dramaSeriesEntry"; 
import { Character } from "./Character";
import { Soundtrack } from "./Soundtrack";
import { Movie } from "./Movie";

export type Show = {
  id: string;
  title: string;  
  englishTitle?: string;  // for shows that have a different title in their original language
  posterUrl: string;
  country: string | string[];         // ex "US", "UK", "SE"
  firstAirDate: string;           // ex "1990–2000" eller "2022–"
  lastAirDate?: string;
  status: string;          // ex "ended", "running"
  language: string | string[];       // ex "English", "Swedish"
  plot: string | string[];
  numberOfSeasons: number;
  numberOfEpisodes: number;
  tags: string[];
  mainCharacters: Character[];
  cast: CastMember[];
  movies?: Movie[];  // for shows that have movies instead of seasons, like "The Hunger Games"
  seasons?: Season[];
  creator: string[] | string;
  director: string[] | string;
  writtenBy: string[] | string;
  adapter?: string[];
  basedOn?: boolean;
  narrator?: string[]; 
  themeSong?: string[] | string;
  endingTheme?: string;
  composer?: string[] | string; 
  executive: string[] | string;
  producer?: string[] | string;
  prodLocation: string[];
  prodCompanies: string[] | string;
  network: string[] | string;
  related?: (Pick<Show, "id" | "posterUrl"> & { title?: string })[];
  soundtrack: Soundtrack[];
  genre: "drama" | "kids" | "crime" | "comedy" | "fantasy"
};

