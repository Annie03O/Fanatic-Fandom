import { Show } from "@/app/models/types/structure/Show";
import { Relationship } from "../../models/types/structure/Relationship";

function formatFamilyRelation(ship: Relationship, gender: "F"  | "M" | "Non-Binary") {

  // FAMILY
  if (ship.family) {
    // SIBLING
    if (ship.family === "Sibling") {
      const base = gender ? "Sister" : ship.gender === "M" ? "Brother" : "Sibling";

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
      return ship.name + " " + `(${base})`;
    }
    const tof = ship.typeOfFamily;

    if (ship.family === "Parent") {
      const parent =
        gender ? "Mother" :
        ship.gender === "M" ? "Father" :
        "parent";
        
        
      if (!tof) return parent;
        
      // mest specifikt först
      if (tof === "Biological" && ship.adopted) return `${ship.name} (Birth ${parent})`;
      if (tof === "Biological" ) return `${ship.name} (${parent})`;
        
      if (tof === "Step") return `${ship.name} (Step ${parent})`;
      if (tof === "Adoptive") return `${ship.name} (Adoptive ${parent})`;
      if (tof === "God") return `${ship.name} (God ${parent})`;
      if (tof === "In-Law") return `${ship.name} (${parent} In Law)`;
        
      return ship.name + " " + `(${parent})`;
    }

    if (ship.family === "Child") {
      const child =
        gender ? "Daughter" :
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

      return ship.name + " " + `(${child})`;
    }
    if (ship.extended === true) {  
      const side = ship.ifExtended === "Maternal" ? "Maternal" : "Paternal"
      if (ship.family === "Aunt/Uncle") {
        const base =
          gender ? "Aunt" :
          ship.gender === "M" ? "Uncle" :
          "";
    
        if (!tof) return base;

          // mest specifikt först
          if (tof === "Biological" && ship.adopted) return `${ship.name} (${side} Birth ${base})`;
          if (tof === "Biological") return `${ship.name} (${side} ${base})`;
          if (tof === "Step") return `${ship.name} (${side} Step ${base})`;
          if (tof === "Adoptive") return `${ship.name} (${side} Adoptive ${base})`
      
        return ship.name + " " + `(${base})`;
      }
    
      if (ship.family === "Cousin") {

        // mest specifikt först
        if (tof === "Biological" && ship.adopted) return `${ship.name} (${side} Birth Cousin)`;
        if (tof === "Biological") return `${ship.name} (${side} Cousin})`;
        if (tof === "Step") return `${ship.name} (${side} Step Cousin)`;
        if (tof === "Adoptive") return `${ship.name} (${side} Adoptive Cousin)`;
      
        return ship.name + " " + side;
      }
      

       if (ship.extended === true) {  
         const side = ship.ifExtended === "Maternal" ? "Maternal" : "Paternal"

          if (ship.family === "Grandparent") {
            const base = gender ? "Grandmother" : "Grandfather"
          
            // mest specifikt först 
            if (tof === "Biological" && ship.adopted) return `${ship.name} (Biological ${side + " " + base})`;
            if (tof === "Biological") return `${ship.name} (${side + " " + base})`;
            if (tof === "Step") return `${ship.name} (Step ${side + " " + base})`;
            if (tof === "Adoptive") return `${ship.name} (Adoptive ${side + " " + base})`;
          
            return ship.name + " " + `(${base})`;
          }
      }
    }

    return "Family";
  }

}

export function formatFamily(show: Show) {

  if (show.mainCharacters === undefined) return console.error("Can't find mainCharacter list for: ", show.id);
  

  const character = show.mainCharacters.find((i) => i.id);

  if (character === undefined) return console.error("Character not found in formatFamily");
  
  const ship = show.relationships.find((i) => i.id); 

  if (ship  === undefined) return console.error('formatFamily failed to find ship');
  
  const secondCharacter = ship?.characters?.find((i) =>  i.id === character.id)

  if (secondCharacter === undefined) return console.error(`Second character for ship with id: ${ship.id} not found`);
 
  const rightCharacter = show.mainCharacters.find((i) => i.id === secondCharacter.id)

  if (rightCharacter === undefined) return console.error("Character is  undefined");
  

  const formatted = formatFamilyRelation(ship, rightCharacter?.gender);

  if (!formatted || ship.dead !== true || !ship.name) return formatted;

  return formatted.replace(ship.name, `${ship.name} †`);
}
