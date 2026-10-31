import { CharacterArc } from "./CharacterArc";
import { EpisodeBreakdown } from "../seasons/episode/EpisodeBreakdown";
import { Occupation } from "./Occupation";
import { Relationship } from "../structure/Relationship";
import { Image } from "./Image";

export type Character = {
    id: string;
    firstName?: string;
    middleName?: string;
    label?: string;
    lastName?: string;
    posterUrl?: Image;
    imageUrl: Image;
    nickname?: string[]
    actor?: string | string[];
    birthday?: string; 
    eyeColor?: string;
    hairColor?: string[] | string;
    gender?: "M" | "F" | "Non-Binary";
    married?: boolean;
    single?: boolean;
    residence: Pick<Occupation, "place" | "started" | "hasEnded" | "ended">[];
    occupation?: Occupation[];
    education?: Occupation[]; 
    nationality?: string;
    goesByNickname?: boolean;
    personality?: string;
    relationships?: Relationship[];
    promo?: boolean;
    number?: number; 
    firstEpisode?: string;
    lastEpisode?: string;
    episodeCount?: string;
    generation?: 1 | 2 | 3;
    classOf?: "2006" | "2007" | "2008" | "2011" | "2013" | "2014" |"2015" | "2016" | "2017" |"2020" | "Other";
    characterArc?: CharacterArc[];
}