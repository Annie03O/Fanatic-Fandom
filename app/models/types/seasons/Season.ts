import { EpisodeBreakdown } from "./episode/EpisodeBreakdown";
import { CastMember } from "../structure/CastMember";
import { Image } from "../characters/Image";

export type Season = {
  id: string;
  seasonNumber: number;
  title?: string;
  plot?: string;
  premiereDate?:string;
  finaleDate?:string;
  premiereEpisode?: string;
  finaleEpisode?: string;
  posterUrl: Image;
  episodeCount: number;
  generation?: 1 | 2 | 3;
  mainCast: CastMember[];
  recurring: CastMember[];
  guestStars?: CastMember[];
  episodeBreakdown: EpisodeBreakdown[];
  network: string | string[];
  previousSeason?: Pick<Season, "id" | "seasonNumber">;
  nextSeason?: Pick<Season, "id" | "seasonNumber">;
};
