import { EpisodeBreakdown } from "../seasons/episode/EpisodeBreakdown";

export type Image = {
  src: string;
  alt: string;
  pageId: string[];
  card?: boolean;
}

export type EpisodeImage = Image & {
  episode: EpisodeBreakdown;
}