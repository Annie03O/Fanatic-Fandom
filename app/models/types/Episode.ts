export type Episode = {
  id: string;
  seasonNumber: number;
  episodeNumber: number;
  title: string;
  plot: string;
  airDate?: string;
  duration?: number; // minuter
  rating?: number;
  stillImageUrl?: string;
};
