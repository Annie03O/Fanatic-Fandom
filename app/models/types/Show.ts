
import { Season } from "./Season";
import { CastMember,  } from "./TeenSeriesEntry.js";
import { Character } from "./Character";
import { Soundtrack } from "./Soundtrack";

export type Show = {
  id: string;
  title: string;  
  posterUrl: string;
  country: string;         // ex "US", "UK", "SE"
  firstAirDate: string;           // ex "1990–2000" eller "2022–"
  lastAirDate: string;
  status: string;          // ex "ended", "running"
  language: string;       // ex "English", "Swedish"
  plot: string;
  numberOfSeasons: number;
  numberOfEpisodes: number;
  tags: string[];
  mainCharacters: Character[];
  cast: CastMember[];
  seasons: Season[];
  creator: string[] | string;
  director: string[];
  writtenBy: string[];
  adapter?: string[];
  basedOn?: boolean;
  narrator?: string[]; 
  themeSong?: string[] | string;
  endingTheme?: string;
  composer?: string[]; 
  executive: string[] | string;
  producer: string[];
  prodLocation: string[];
  prodCompanies: string[] | string;
  network: string[];
  related?: Pick<Show, "posterUrl" | "id"| "title">[]; 
  soundtrack: Soundtrack[];
};
