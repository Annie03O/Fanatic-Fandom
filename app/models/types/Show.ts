import { Character } from "./Character";
import { Season } from "./Season";
import { CastMember,  } from "./TeenSeriesEntry";
import { Infobox,  } from "./Infobox";

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
  creator: string[];
  adapter?: string[];
  basedOn?: boolean;
  narrator?: string[]; 
  themeSong?: string[];
  endingTheme?: string;
  composer?: string[]; 
  executive: string[];
  producer: string[];
  prodLocation: string[];
  prodCompanies: string[];
  network: string[];
  related?: string[]; 
  
};
