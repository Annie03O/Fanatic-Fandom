import { Character } from "../characters/Character";
import { Image } from "./Image";
export type MiniCharacter = {
    content: Pick<Character, "id" | "label" | "gender">,
    older?: boolean
}

export type Relationship = {
    id?: string;
    type: "Romantic" | "Family" | "Friendship" | "Rivalry";
    current?: "Romantic" | "Family" | "Friendship" | "Rivalry",
    characters?: MiniCharacter[];
    name?: string;
    started?: string[];
    ended?: string[];
    older?: boolean;
    dead?: boolean;
    twin?: boolean;
    half?: "Maternal" | "Paternal"; 
    typeOfFamily?: "Biological" | "Adoptive" | "Step" | "In-Law" | "God" | "Half";
    adopted?: boolean;
    extended?: boolean;
    ifExtended?: "Maternal" | "Paternal",
    family?: "Parent/Child" | "Sibling" | "Cousin" | "Grandparent/Grandchild" | "Pibling/Nibling" | "Spouse"; 
    secondParent?: string;
    kindOfFriendship?: "Normal" | "Close" | "Best Friend" | "Mentor" | "Father Figure";
    romantic?: "Girlfriend/Boyfriend" | "Dated" | "Fling" | "Crush" | "Ex-Boyfriend/Ex-Girlfriend" | "Wife/Husband" | "Ex-Wife/Ex-Husband" | "Hook-Up" | "Fiancé" | "Ex-Fiancé" | "Kissed" | "One Date" | "Affair";
    description?: string[]; 
    shortDesc?: string;
    imgUrl?: Image;
    card?: boolean; 
    gender?: "F" | "M" | "Non-Binary"
}