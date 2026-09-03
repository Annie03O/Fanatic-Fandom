import { Relationship } from "../../models/types/Relationship";

export function formatFriendShip(ship: Relationship): string | null {
  if (ship.type !== "Friendship") return null;

  if (ship.kindOfFriendship === "Normal")  return `${ship.name}`;
  if (ship.kindOfFriendship === "Close")  return `${ship.name} (Close Friend)`;
  if (ship.kindOfFriendship === "Best Friend")  return `${ship.name} (Best Friend)`;
  if (ship.kindOfFriendship === "Father Figure") return `${ship.name} (Father Figure)`


  return ship.name ? `${ship.name} (Friends)` : null;
}