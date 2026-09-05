export type EpisodeBreakdown = {
    id: string;
    imageUrl: string;
    seasonNumber: number;
    episodeNumber: number;
    episodeTitle: string[];
    altEpisodeTitle?: string; 
    plot: string;   
    director: string;
    writer: string | string[];
    releaseDate: string;
    usViewers: number;
}