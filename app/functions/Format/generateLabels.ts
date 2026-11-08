import { Relationship } from "@/app/models/types/structure/Relationship";

export const generateLabel = (i: Relationship, gender: boolean | "F"  | "M" | "Non-Binary"): string => {
  
  // FRIENDSHIP
  if (i.type === "Friendship") {
    if (i.kindOfFriendship === "Best Friend") return "Best Friend";
    if (i.kindOfFriendship === "Close") return "Close Friend";
    if (i.kindOfFriendship === "Father Figure") return "Father Figure"; 
    return "Friend";
  }

  if (i.type === "Romantic") {
    if (i.romantic === "Ex-Boyfriend/Ex-Girlfriend") {
        if (gender === "F") return "Ex-Girlfriend";
        if (gender === "M") return "Ex-Boyfriend";
    }
    if (i.romantic === "Girlfriend/Boyfriend") {
        if (gender === "F") return "Girlfriend";
        if (gender === "M") return "Boyfriend";
    }
    if (i.romantic === "Crush") {
        if (i.ended) return "Former Crush"

        return "Crush";
    } 
    if (i.romantic === "Hook-Up") return "Hook-Up";
    if (i.romantic === "Fiancé") return "Fiancé";
    if (i.romantic === "Ex-Fiancé") return "Ex-Fiancé";
    if (i.romantic === "Kissed") return "Kissed";
    if (i.romantic === "Dated") return "Dated";
    if (i.romantic === "One Date") return "One Date";
    if (i.romantic === "Affair") return "Affair";

    if (i.romantic === "Wife/Husband") {
        if (gender === "F") return "Wife";
        if (gender === "M") return "Husband";

        return "Spouse"
    }
    if (i.romantic === "Ex-Wife/Ex-Husband") {
        if (gender === "F") return "Ex-Wife";
        if (gender === "M") return "Ex-Husband";

        return "Spouse"
    }
  }

  // FAMILY
  if (i.type === "Family") {
    // SIBLING
    if (i.family === "Sibling") {
      const base = gender === "F" ? "Sister" : gender === "M" ? "Brother" : "Sibling";

        if (i.typeOfFamily) {
          if (i.typeOfFamily === "Step")  return `Step ${base}`
          if (i.typeOfFamily === "Adoptive") return `Adoptive ${base}`
          if (i.typeOfFamily === "God") return `God ${base}`
          if (i.typeOfFamily ===  "In-Law") return `${base} In Law`
        }

        i.older === true ? `Older ${base}`: `Younger ${base}`
      return base;
    }
    if (i.family === "Parent/Child") {
      const parent =
        gender === "F" ? "Mother" : gender === "M" ? "Father" : "Parent/Child";

        if (i.typeOfFamily) {
          if (i.typeOfFamily === "Biological" && i.adopted)  return `Birth ${parent}`
          if (i.typeOfFamily === "Step")  return `Step ${parent}`
          if (i.typeOfFamily === "Adoptive") return `Adoptive ${parent}`
          if (i.typeOfFamily === "God") return `God ${parent}`
          if (i.typeOfFamily ===  "In-Law") return `${parent} In Law`
        }
     
    
      return parent;
    }

    if (i.family === "Grandparent/Grandchild") {
      const grandparent =
        gender === "F" ? "Grand-Mother" 
         : gender === "M" ? "Grand-Father" 
         : "Grandparent";

      const Grandchild = 
        gender === "F" ? "Grand-Daughter" 
         : gender === "M" ? "Grand-Son"
         : "Grandchild"

        if (i.typeOfFamily) {
          if (i.typeOfFamily === "Biological" && i.adopted)  return `Birth ${grandparent}`
          if (i.typeOfFamily === "Step")  return `Step ${grandparent}`
          if (i.typeOfFamily === "Adoptive") return `Adoptive ${grandparent}`
          if (i.typeOfFamily === "God") return `God ${grandparent}`
          if (i.typeOfFamily ===  "In-Law") return `${grandparent} In Law`
        }
     
    
      return grandparent;
    }

    return "Family";
  }

  return "";
};

    