<<<<<<< HEAD
import { CharacterArc } from "./CharacterArc";
import { EpisodeBreakdown } from "./EpisodeBreakdown";
import { Education, Occupation } from "./Occupation";
import { Relationship } from "./Relationship";
=======
import { CharacterArc } from "./CharacterArc.js";
import { Education, Occupation } from "./Occupation.js";
import { Relationship } from "./Relationship.js";
>>>>>>> 4b79439 (Cleaning worktree)

export type Character = {
    id: string;
    firstName?: string;
    label?: string;
    lastName?: string;
    posterUrl?: string;
    imageUrl: string;
    nickname?: string[]
    actor?: string;
<<<<<<< HEAD
    birthday?: string; 
    eyeColor?: string;
    hairColor?: string[];
    gender?: "M" | "F" | "Non-Binary";
    married?: boolean;
    single?: boolean;
    occupation?: Occupation[];
    education?: Education[]; 
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
=======
    birthday: string; 
    eyeColor: string;
    hairColor: string[];
    gender: "M" | "F" | "Non-Binary";
    married?: boolean;
    single: boolean;
    occupation?: Occupation[];
    education: Education[]; 
    nationality?: string;
    goesByNickname?: boolean;
    personality: string;
    relationships: Relationship[];
    promo: boolean;
    number?: number; 
    firstEpisode: string;
    lastEpisode: string;
    episodeCount: string;
    generation?: 1 | 2 | 3;
    classOf?: "2006" | "2007" | "2008" | "2011" | "2013" | "2014" |"2015" | "2016" | "2017" |"2020" | "Other";
    characterArc: CharacterArc[];
>>>>>>> 4b79439 (Cleaning worktree)
}