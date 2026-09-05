import { EpisodeBreakdown } from "./EpisodeBreakdown";
import { CastMember } from "./TeenSeriesEntry";

export type Season = {
  id: string;
  seasonNumber: number;
  title?: string;
  plot?: string;
  premiereDate?:string;
  finaleDate?:string;
  premiereEpisode?: string;
  finaleEpisode?: string;
  posterUrl?: string;
  episodeCount: number;
  generation?: 1 | 2 | 3;
  mainCast: CastMember[];
  recurring: CastMember[];
  guestStars?: CastMember[];
  episodeBreakdown: EpisodeBreakdown[];
  network: string | string[];
  previousSeason?: Pick<Season, "id" | "seasonNumber">[];
  nextSeason?: Pick<Season, "id" | "seasonNumber">;
};
