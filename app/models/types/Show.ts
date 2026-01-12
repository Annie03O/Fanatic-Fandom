import { CastMember, CharacterInfo, } from "./TeenSeriesEntry";

export type Show = {
  id: string;
  title: string;  posterUrl: string;
  country: string;         // ex "US", "UK", "SE"
  firstAirDate: string;           // ex "1990–2000" eller "2022–"
  lastAirDate: string;
  status: string;          // ex "ended", "running"
  language: string;       // ex "English", "Swedish"
  plot: string;
  numberOfSeasons: number;
  numberOfEpisodes: number;
  tags: string[];

  mainCharacters: CharacterInfo[];
  cast: CastMember[];
};
