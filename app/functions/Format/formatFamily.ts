import { Show } from "@/app/models/types/structure/Show";
import { Relationship } from "../../models/types/structure/Relationship";

function formatFamilyRelation(ship: Relationship, gender: "F"  | "M" | "Non-Binary") {

  // FAMILY
  if (ship.family) {
    // SIBLING
    if (ship.family === "Sibling") {
      const base = gender ? "Sister" : gender === "M" ? "Brother" : "Sibling";
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

    if (ship.family === "Parent/Child") {
      const parent =
        gender === "F" ? "Mother"
        : gender === "M" ? "Father" 
        : "Parent" 

      const child = 
        gender === "F" ? "Daughter" 
        : gender === "M" ? "Son"
        : "Child"

      const item = 
        ship.older === true ? parent 
        : child
      
        
      if (!tof) return parent;
        
      // mest specifikt först
      if (tof === "Biological" && ship.adopted) return `${ship.name} (Birth ${parent})`;
      if (tof === "Biological" ) return `${ship.name} (${item})`;
        
      if (tof === "Step") return `${ship.name} (Step ${item})`;
      if (tof === "Adoptive") return `${ship.name} (Adoptive ${item})`;
      if (tof === "God") return `${ship.name} (God ${item})`;
      if (tof === "In-Law") return `${ship.name} (${item} In Law)`;
        
      return ship.name + " " + `(${item})`;
    }

    if (ship.extended === true) {  
      const side = ship.ifExtended === "Maternal" ? "Maternal" : "Paternal"
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
           ship.older === true ? pibling :
           ship.older === false ? nibling :
           null
    
        if (!tof) return pibling;

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

          if (ship.family === "Grandparent/Grandchild") {
            const grandparent = gender === "F" ? "Grand-Mother" 
              : gender === "M" ? "Grand-Father" 
              : "Grandparent"

            const grandchild = gender === "F" ? "Grand-Daughter"
              : gender === "M" ? "Grand-Son" 
              : "Grand-Child"

            const base = ship.older === true ? grandparent
             : ship.older === false ? grandchild 
             : "Grandparent/Grandchild"
          
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

  if (show.mainCharacters === undefined) return console.error("Can't find mainCharacter list for: ", show);
  if (!show.relationships?.length) return undefined;
  

  const character = show.mainCharacters.find((i) => i.id);

  if (character === undefined) return console.error("Character not found in formatFamily");
  
  const ship = show.relationships.find((i) => i.id); 

  if (ship  === undefined) return console.error('formatFamily failed to find ship');
  
  if (ship.characters === undefined) return console.error("Characters for ship is undefined");
  
  const secondCharacter = ship?.characters?.find((i) =>  i.content.id === character.id)

  console.log(secondCharacter);
  

  if (secondCharacter === undefined) return console.error(`Second character for ship with id: ${ship.id} not found`);
 
  const rightCharacter = show.mainCharacters.find((i) => i.id === secondCharacter.content.id)

  if (rightCharacter === undefined) return console.error("Character is  undefined");


  const formatted = formatFamilyRelation(ship, rightCharacter?.gender);

  if (!formatted || ship.dead !== true || !ship.name) return formatted;

    const rels = (show.relationships ?? []).filter(
    (r): r is Relationship => Boolean(r)
  );


  console.log(rels);
  

  // Map over relationships, not shows
  const family = rels
    .map((r) => formatFamilyRelation(r, rightCharacter?.gender))
    .filter((s): s is string => Boolean(s));


  return formatted.replace(ship.name, `${ship.name} †`);

  
}
