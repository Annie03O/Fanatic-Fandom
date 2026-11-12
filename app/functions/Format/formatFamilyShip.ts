import { faL } from "@fortawesome/free-solid-svg-icons";
import { MiniCharacter, Relationship } from "../../models/types/structure/Relationship";

export function formatFamilyShip(ship: Relationship, gender: "F"  | "M" | "Non-Binary", charater: MiniCharacter) {

  const named = (relation: string) =>
    ship.name ? `${ship.name} (${relation})` : relation;

  // SPOUSE (can be on a "Romantic" relationship too)
  if (ship.family === "Spouse") {
    return named(gender === "F" ? "Wife" : gender === "M" ? "Husband" : "Spouse");
  }

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
      : named(`${ship.older ? "Older" : ship.older === false ? "Younger" : ""} ${base}`);
    }
    const tof = ship.typeOfFamily;

    if (ship.family === "Parent/Child") {
      const parent =
        gender === "F" ? "Mother" :
        gender === "M" ? "Father" :
        "Parent";

      const child =
        gender === "F" ? "Daughter" :
        gender === "M" ? "Son" :
        "Child"

      const base = 
        charater.older === true ? parent :
        charater.older === false ? child :
        "Parent/Child"
        
      if (!tof) return named(base);
        
      // mest specifikt först
      if (tof === "Biological" && ship.adopted) return named(`Birth ${base}`);
      if (tof === "Biological") return named(base);
        
      if (tof === "Step") return named(`Step ${base}`);
      if (tof === "Adoptive") return named(`Adoptive ${base}`);
      if (tof === "God") return named(`God ${base}`);
      if (tof === "In-Law") return named(`${base} In Law`);
        
      return named(base);
    }

    if (ship.extended === true) {  
      const side = ship.ifExtended === "Maternal" && charater.older === true ? "Maternal" : charater.older === true ? "Paternal" : ""
      if (ship.family === "Pibling/Nibling") {
        const pibling =
          gender === "F" ? "Aunt" :
          gender === "M" ? "Uncle" :
          "Pibling";
        
        const nibling = 
          gender === "F" ? "Niece" :
          gender === "M" ? "Nephew" :
          "Nibling"

        const base = 
          charater.older === true ? pibling 
          : charater.older === false ? nibling 
          : "Pibling/Nibling"
    
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
      

      if (ship.family === "Grandparent/Grandchild") {
        const grandparent = 
         gender === "F" ? "Grandmother" 
          : gender === "M" ? "Grandfather" 
          : "Grandparent"

        const grandchild =
         gender === "F" ? "Grandaughter" 
          : gender === "M" ? "Grandson"
          : "Grandchild"

        const base =
         charater.older === true ? grandparent 
          : charater.older === false ? grandchild 
          : "Grandparent/Grandchild"


        // mest specifikt först
        if (tof === "Biological" && ship.adopted) return named(`Birth ${base}`);
        if (tof === "Biological") return named(base);
        if (tof === "Step") return named(`Step ${base}`);
        if (tof === "Adoptive") return named(`Adoptive ${base}`);
        if (tof === "In-Law") return named(`${base} In Law`);
      
        return named(base);
      }
    }

    return "Family";
  }

}
