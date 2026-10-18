import Soundtrack from "@/app/components/Music/Soundtrack";
import { Song } from "./Song";

export type Soundtrack = {
    id: string;
    type: "soundtrack" | "album";
    songs: Song[];
    imgUrl?: string;
    noSeason?: number;
    noImage: boolean;
}

