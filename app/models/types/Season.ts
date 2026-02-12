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

};
