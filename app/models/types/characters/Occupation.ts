export type Occupation = {
    title?: "Owner" | "Editor" | "Student" | "Waiter" | string,
    place?: string,
    started?: string,
    hasEnded: boolean;
    ended?: string;
}
