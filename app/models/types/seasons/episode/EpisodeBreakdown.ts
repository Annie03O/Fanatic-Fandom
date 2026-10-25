import { Song } from "../../music/Song";
import { Soundtrack } from "../../music/Soundtrack";
import { Image } from "../../structure/Image";

export type EpisodeBreakdown = {
    id: string;
    episodeImageUrl: Image;
    seasonNumber: number;
    episodeNumber: number | number[];
    episodeTitle: string[] | string;
    altEpisodeTitle?: string; 
    plot: string;   
    director: string;
    writtenBy: string | string[];
    releaseDate: string;
    usViewers?: number;
    soundtrack: Soundtrack[] | Song[];
}