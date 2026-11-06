import { Relationship } from "../../models/types/structure/Relationship";

export function formatFamilyShip(ship: Relationship, gender: "F"  | "M" | "Non-Binary") {
  const named = (relation: string) =>
    ship.name ? `${ship.name} (${relation})` : relation;

    // FAMILY
  if (ship.type === "Family") {
    // SIBLING
    if (ship.family === "Sibling") {
      const base = gender === "F" ? "Sister" : gender === "M" ? "Brother" : "Sibling";

        if (ship.typeOfFamily) {
        if (ship.typeOfFamily === "Step")  return named(`Step ${base}`)
        if (ship.typeOfFamily === "Adoptive") return named(`Adoptive ${base}`)
        if (ship.typeOfFamily === "God") return named(`God ${base}`)
        if (ship.typeOfFamily ===  "In-Law") return named(`${base} In Law`)
        }
        if (ship.half) {
        if (ship.half === "Maternal") return named(`Maternal Half-${base}`)
        if (ship.half === "Paternal") return named(`Paternal Half-${base}`)
        }

      return ship.older === undefined
      ? named(base)
      : named(`${ship.older ? "Older" : "Younger"} ${base}`);
    }
    const tof = ship.typeOfFamily;

    if (ship.family === "Parent") {
      const parent =
        gender === "F" ? "Mother" :
        gender === "M" ? "Father" :
        "parent";
        
        
      if (!tof) return named(parent);
        
      // mest specifikt först
      if (tof === "Biological" && ship.adopted) return named(`Birth ${parent}`);
      if (tof === "Biological") return named(parent);
        
      if (tof === "Step") return named(`Step ${parent}`);
      if (tof === "Adoptive") return named(`Adoptive ${parent}`);
      if (tof === "God") return named(`God ${parent}`);
      if (tof === "In-Law") return named(`${parent} In Law`);
        
      return named(parent);
    }

    if (ship.family === "Child") {
      const child =
        gender === "F" ? "Daughter" :
        gender === "M" ? "Son" :
        "Child";

    
      if (!tof) return named(child);

      // mest specifikt först
      if (tof === "Biological" && ship.adopted) return named(`Birth ${child}`);
      if (tof === "Biological") return named(child);

      if (tof === "Step") return named(`Step ${child}`);
      if (tof === "Adoptive") return named(`Adoptive ${child}`);
      if (tof === "God") return named(`God ${child}`);
      if (tof === "In-Law") return named(`${child} In Law`);

      return named(child);
    }
    if (ship.extended === true) {  
      const side = ship.ifExtended === "Maternal" ? "Maternal" : "Paternal"
      if (ship.family === "Aunt/Uncle") {
        const base =
          gender === "F" ? "Aunt" :
          gender === "M" ? "Uncle" :
          "";
    
        if (!tof) return named(base);

          // mest specifikt först
          if (tof === "Biological" && ship.adopted) return named(`${side} Birth ${base}`);
          if (tof === "Biological") return named(`${side} ${base}`);
          if (tof === "Step") return named(`${side} Step ${base}`);
          if (tof === "Adoptive") return named(`${side} Adoptive ${base}`)
      
        return named(base);
      }
    
      if (ship.family === "Cousin") {

        // mest specifikt först
        if (tof === "Biological" && ship.adopted) return named(`${side} Birth Cousin`);
        if (tof === "Biological") return named(`${side} Cousin`);
        if (tof === "Step") return named(`${side} Step Cousin`);
        if (tof === "Adoptive") return named(`${side} Adoptive Cousin`);
      
        return named("Cousin");
      }
      

      if (ship.family === "Grandparent") {
        const base = gender === "F" ? "Grandmother" : "Grandfather"

        // mest specifikt först
        if (tof === "Biological" && ship.adopted) return named(`Birth ${base}`);
        if (tof === "Biological") return named(base);
        if (tof === "Step") return named(`Step ${base}`);
        if (tof === "Adoptive") return named(`Adoptive ${base}`);
      
        return named(base);
      }
    }

    return "Family";
  }

}
