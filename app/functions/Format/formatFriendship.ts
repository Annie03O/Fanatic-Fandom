import { Relationship } from "../../models/types/Relationship";

export function formatFriends(ship: Relationship): string | null {
  if (ship.type !== "Friendship") return null;

  if (ship.kindOfFriendship === "Normal")  return `${ship.name}`;
  if (ship.kindOfFriendship === "Close")  return `${ship.name} (Close Friend)`;
  if (ship.kindOfFriendship === "Best Friend")  return `${ship.name} (Best Friend)`;
  if (ship.kindOfFriendship === "Father Figure") return `${ship.name} (Father Figure)`


  return ship.name ? `${ship.name} (Friends)` : null;
}

export function formatFriendship(ship: Relationship) {
  const formatted = formatFriends(ship);

  if (!formatted || ship.dead !== true || !ship.name) return formatted;

  return formatted.replace(ship.name, `${ship.name} †`);
}
