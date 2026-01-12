import { Character } from "./Character";
import { Episode } from "./Episode";
import { Season } from "./Season";
import { Show } from "./Show";

export type TvSeriesFull = {
  series: Show;
  seasons: Season[];
  episodes: Episode[];
  characters: Character[];
};
