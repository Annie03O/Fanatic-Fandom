import { Character } from "../../models/types/Character";
import { Relationship } from "../../models/types/Relationship";
export function formatMaritalStatus(
  character: Character,
  romanticShip?: Relationship
  
): string | null {
  if (character.single === true) return "Single";
  if (character.single !== false) return null; // okänt/ej satt

  if (!romanticShip?.name) return null;

  switch (romanticShip.romantic) {
    case "Girlfriend/Boyfriend":
      return `Dating ${romanticShip.name}`;
    case "Wife/Husband":
      return `Married to ${romanticShip.name}`;
    case "Fiancé":
      return `Engaged to ${romanticShip.name}`;
    default:
      return romanticShip.name;
  }
}