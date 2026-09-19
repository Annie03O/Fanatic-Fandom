export type EpisodeBreakdown = {
    id: string;
    imageUrl: string;
    seasonNumber: number;
    episodeNumber: number;
    episodeTitle: string[] | string;
    altEpisodeTitle?: string; 
    plot: string;   
    director: string;
    writtenBy: string | string[];
    releaseDate: string;
    usViewers: number;
}