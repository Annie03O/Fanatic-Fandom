import { EpisodeBreakdown } from "../seasons/episode/EpisodeBreakdown";

export type Image = {
  src: string;
  alt: string;
  pageId: string[];
}

export type EpisodeImage = Image & {
  episode: EpisodeBreakdown;
}