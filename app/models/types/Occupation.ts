export type Occupation = {
    title: string,
    place?: string,
    started: string,
    hasEnded: boolean;
    ended?: string;
}

export type Education = Pick<Occupation, "place" | "hasEnded" | "ended" | "started" >