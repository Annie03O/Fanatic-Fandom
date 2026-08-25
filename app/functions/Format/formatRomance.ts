import { Relationship } from "../../models/types/Relationship";

export function formatRomance(ship: Relationship): string | null {
  if (ship.type !== "Romantic") return null;

  if (ship.romantic === "Crush")  return `${ship.name} (Crush)`;
  if (ship.romantic === "Hook-Up")  return `${ship.name} (Hook-Up)`;
  if (ship.romantic === "Fling")  return `${ship.name} (Fling)`;
  if (ship.romantic === "Fiancé")  return `${ship.name} (Fiancé)`;
  if (ship.romantic === "Dated")  return `${ship.name} (Dated)`;

  if (ship.romantic === "Ex-Boyfriend/Ex-Girlfriend") {
    if (ship.gender === "F") return `${ship.name} (Ex-Girlfriend)`;
    if (ship.gender === "M") return `${ship.name} (Ex-Boyfriend)`;
    return `${ship.name} (Ex)`;
  }

  if (ship.romantic === "Girlfriend/Boyfriend") {
    if (ship.gender === "F") return `${ship.name} (Girlfriend)`;
    if (ship.gender === "M") return `${ship.name} (Boyfriend)`;
    return `${ship.name} (Partner)`;
  }

  if (ship.romantic === "Ex-Fiancé") return `${ship.name} (Ex-Fiancé)`

  if (ship.romantic === "Wife/Husband") {
    if (ship.gender === "F") return `${ship.name} (Wife)`;
    if (ship.gender === "M") return `${ship.name} (Husband)`;
    
    return `${ship.name} (Spouse)`;
  }

  return ship.name ? `${ship.name} (Romance)` : null;
}
