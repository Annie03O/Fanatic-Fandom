import { Image } from "../../characters/Image";

export type EpisodeBreakdown = {
    id: string;
    imageUrl: Image;
    seasonNumber: number;
    episodeNumber: number | number[];
    episodeTitle: string[] | string;
    altEpisodeTitle?: string; 
    plot: string;   
    director: string;
    writtenBy: string | string[];
    releaseDate: string;
    usViewers?: number;
}