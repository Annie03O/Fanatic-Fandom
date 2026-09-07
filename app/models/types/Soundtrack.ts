import Soundtrack from "@/app/components/Music/Soundtrack";
import { Episode } from "./Episode";
import { Song } from "./Song";

export type Soundtrack = {
    id: string;
    type: "soundtrack" | "album";
    songs: EpisodeSongInfo[];
    imgUrl?: string;
    noSeason?: number;
    noImage: boolean;
}

type EpisodeSongInfo = {
    episodeTitle: string;
    song: Song[];
}