export type Relationship = {
    id?: string;
    type: "Romantic" | "Family" | "Friendship" | "Rivalty";
    current?: "Romantic" | "Family" | "Friendship" | "Rivalty",
    characters?: string[];
    gender: "F" | "M" | ""
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
    family?: "Parent" | "Sibling" | "Cousin" | "Grandparent" | "Child" | "Aunt/Uncle" ; 
    secondParent?: string;
    kindOfFriendship?: "Normal" | "Close" | "Best Friend" | "Mentor" | "Father Figure";
    romantic?: "Girlfriend/Boyfriend" | "Dated" | "Fling" | "Crush" | "Ex-Boyfriend/Ex-Girlfriend" | "Wife/Husband" | "Ex-Wife/Ex-Husband" | "Hook-Up" | "Fiancé" | "Ex-Fiancé" | "Kissed" | "One Date";
    description?: string[]; 
    shortDesc?: string;
    imgUrl?: string;
    card?: boolean; 
}