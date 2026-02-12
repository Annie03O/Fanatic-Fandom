import { Relationship } from "../../models/types/Relationship";

export function formatFamilyShip(ship: Relationship) {
    // FAMILY
  if (ship.type === "Family") {
    // SIBLING
    if (ship.family === "Sibling") {
      const base = ship.gender === "F" ? "Sister" : ship.gender === "M" ? "Brother" : "Sibling";

        if (ship.typeOfFamily) {
          if (ship.typeOfFamily === "Step")  return `${ship.name} (Step ${base})`
          if (ship.typeOfFamily === "Adoptive") return `${ship.name} (Adoptive ${base})`
          if (ship.typeOfFamily === "God") return `${ship.name} (God ${base})`
          if (ship.typeOfFamily ===  "In-Law") return `${ship.name} (${base} In Law)`
        }
        if (ship.half) {
          if (ship.half === "Maternal") return `${ship.name} (Maternal Half-${base}) `
          if (ship.half === "Paternal") return `${ship.name} (Paternal Half-${base}) `
        }

        ship.older === true ? `${ship.name} (Older ${base})` : `${ship.name} (Younger ${base})` 
      return base;
    }
    const tof = ship.typeOfFamily;

    if (ship.family === "Parent") {
      const parent =
        ship.gender === "F" ? "Mother" :
        ship.gender === "M" ? "Father" :
        "parent";
        
        
      if (!tof) return parent;
        
      // mest specifikt först
      if (tof === "Biological" && ship.adopted) return `${ship.name} (Birth ${parent})`;
      if (tof === "Biological") return `${ship.name} (${parent})`;
        
      if (tof === "Step") return `${ship.name} (Step ${parent})`;
      if (tof === "Adoptive") return `${ship.name} (Adoptive ${parent})`;
      if (tof === "God") return `${ship.name} (God ${parent})`;
      if (tof === "In-Law") return `${ship.name} (${parent} In Law)`;
        
      return parent;
    }

    if (ship.family === "Child") {
      const child =
        ship.gender === "F" ? "Daughter" :
        ship.gender === "M" ? "Son" :
        "Child";

    
      if (!tof) return child;

      // mest specifikt först
      if (tof === "Biological" && ship.adopted) return `${ship.name} (Birth ${child})`;
      if (tof === "Biological") return `${ship.name} (${child})`;

      if (tof === "Step") return `${ship.name} (Step ${child})`;
      if (tof === "Adoptive") return `${ship.name} (Adoptive ${child})`;
      if (tof === "God") return `${ship.name} (God ${child})`;
      if (tof === "In-Law") return `${ship.name} (${child} In Law)`;

      return child;
    }
    if (ship.extended === true) {  
      const side = ship.ifExtended === "Maternal" ? "Maternal" : "Paternal"
      if (ship.family === "Aunt/Uncle") {
        const base =
          ship.gender === "F" ? "Aunt" :
          ship.gender === "M" ? "Uncle" :
          "";
    
        if (!tof) return base;

          // mest specifikt först
          if (tof === "Biological" && ship.adopted) return `${ship.name} (${side} Birth ${base})`;
          if (tof === "Biological") return `${ship.name} (${side} ${base})`;
          if (tof === "Step") return `${ship.name} (${side} Step ${base})`;
          if (tof === "Adoptive") return `${ship.name} (${side} Adoptive ${base})`
      
        return base;
      }
    
      if (ship.family === "Cousin") {

        // mest specifikt först
        if (tof === "Biological" && ship.adopted) return `${ship.name} (${side} Birth Cousin)`;
        if (tof === "Biological") return `${ship.name} (${side} Cousin})`;
        if (tof === "Step") return `${ship.name} (${side} Step Cousin)`;
        if (tof === "Adoptive") return `${ship.name} (${side} Adoptive Cousin)`;
      
        return "Cousin";
      }
      

      if (ship.family === "Grandparent") {
        const base = ship.gender === "F" ? "Grandmother" : "Grandfather"

        // mest specifikt först
        if (tof === "Biological" && ship.adopted) return `${ship.name} (Birth Cousin)`;
        if (tof === "Biological") return `${ship.name} (Cousin})`;
        if (tof === "Step") return `${ship.name} (Step Cousin)`;
        if (tof === "Adoptive") return `${ship.name} (Adoptive Cousin)`;
      
        return "Cousin";
      }
    }

    return "Family";
  }

}

