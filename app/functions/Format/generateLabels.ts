import { Relationship } from "@/app/models/types/structure/Relationship";

export const generateLabel = (i: Relationship): string => {
 
  
  // FRIENDSHIP
  if (i.type === "Friendship") {
    if (i.kindOfFriendship === "Best Friend") return "Best Friend";
    if (i.kindOfFriendship === "Close") return "Close Friend";
    if (i.kindOfFriendship === "Father Figure") return "Father Figure"; 
    return "Friend";
  }

  if (i.type === "Romantic") {
    if (i.romantic === "Ex-Boyfriend/Ex-Girlfriend") {
        if (i.gender === "F") return "Ex-Girlfriend";
        if (i.gender === "M") return "Ex-Boyfriend";
    }
    if (i.romantic === "Girlfriend/Boyfriend") {
        if (i.gender === "F") return "Girlfriend";
        if (i.gender === "M") return "Boyfriend";
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
        if (i.gender === "F") return "Wife";
        if (i.gender === "M") return "Husband";

        return "Spouse"
    }
    if (i.romantic === "Ex-Wife/Ex-Husband") {
        if (i.gender === "F") return "Ex-Wife";
        if (i.gender === "M") return "Ex-Husband";

        return "Spouse"
    }
  }

  // FAMILY
  if (i.type === "Family") {
    // SIBLING
    if (i.family === "Sibling") {
      const base = i.gender === "F" ? "Sister" : i.gender === "M" ? "Brother" : "Sibling";

        if (i.typeOfFamily) {
          if (i.typeOfFamily === "Step")  return `Step ${base}`
          if (i.typeOfFamily === "Adoptive") return `Adoptive ${base}`
          if (i.typeOfFamily === "God") return `God ${base}`
          if (i.typeOfFamily ===  "In-Law") return `${base} In Law`
        }

        i.older === true ? `Older ${base}`: `Younger ${base}`
      return base;
    }
    if (i.family === "Parent") {
      const parent =
        i.gender === "F" ? "Mother" : i.gender === "M" ? "Father" : "Parent";

        if (i.typeOfFamily) {
          if (i.typeOfFamily === "Biological" && i.adopted)  return `Birth ${parent}`
          if (i.typeOfFamily === "Step")  return `Step ${parent}`
          if (i.typeOfFamily === "Adoptive") return `Adoptive ${parent}`
          if (i.typeOfFamily === "God") return `God ${parent}`
          if (i.typeOfFamily ===  "In-Law") return `${parent} In Law`
        }
     
    
      return parent;
    }

    if (i.family === "Child") {
      const child = i.gender === "F" ? "Daughter" : i.gender === "M" ? "Son" : "Child";
      
      if (i.typeOfFamily) {
          if (i.typeOfFamily === "Biological" && i.adopted)  return `(Birth ${child})`
          if (i.typeOfFamily === "Step")  return `(Step ${child})`
          if (i.typeOfFamily === "Adoptive") return `(Adoptive ${child})`
          if (i.typeOfFamily === "God") return `(God ${child})`
          if (i.typeOfFamily ===  "In-Law") return `(${child} In Law)`
        }
      return child;
    }

    return "Family";
  }

  return "";
};

    