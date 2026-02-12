import { Character } from "../../models/types/Character";
import { InfoField } from "../../models/types/Infobox";
import { Relationship } from "../../models/types/Relationship";
import { formatFamilyShip } from "../Format/formatFamilyShip";
import { formatFriendShip } from "../Format/formatFriendShip";
import { formatMaritalStatus } from "../Format/formatMaritalStatus";
import { formatRomance } from "../Format/formatRomance";
import { teenSeriesTop50WithSlug } from "../teenSeriesTop50WithSlug";

const isInfoField = (x: InfoField | null): x is InfoField => x !== null;

export function convertToCharacterInfobox(character: Character) {
  const rels = (character.relationships ?? []).filter(
    (r): r is Relationship => Boolean(r)
  );

  const friends = rels.
    map(formatFriendShip).
    filter((f): f is string => Boolean(f)) ;
  const family = rels
    .map(formatFamilyShip)
    .filter((s): s is string => Boolean(s));

  const romance = rels.
    map(formatRomance). 
    filter((s): s is string => Boolean(s))

  const fullName =
    character.firstName?.length && character.lastName?.length
      ? `${character.firstName} ${character.lastName}`
      : null;
  

  const maritalStatus = formatMaritalStatus(character);

  const fields: InfoField[] = [
    fullName ? { label: "Full Name", info: fullName } : null,
    character.nickname?.length ? { label: "Nicknames", info: character.nickname } : null,
    character.birthday?.length ? { label: "Born", info: character.birthday } : null,
    character.hairColor?.length ? { label: "Hair Color", info: character.hairColor } : null,
    character.eyeColor?.length ? { label: "Eye Color", info: character.eyeColor } : null,
    character.occupation?.toString().length ? { label: "Occupation", info: character.occupation } : null,
    character.education?.toString().length ? { label: "Education", info: character.education } : null,

    maritalStatus ? { label: "Marital Status", info: maritalStatus } : null,
    family.length ? { label: "Family", info: family } : null,
    friends.length ? { label: "Friends", info: friends} : null,
    romance.length ? { label: "Romance", info: romance} : null, 
    
    character.actor?.length ? { label: "Actor", info: character.actor } : null,
    character.firstEpisode?.length ? {label: "First Episode", info: character.firstEpisode} : null,
    character.lastEpisode?.length ? {label: "Last Episode", info: character.lastEpisode} : null,
  ].filter(isInfoField);

  return {
    ...character,
    infobox: [
      {
        name: character.firstName,
        posterSrc: character.posterUrl,
        fields,
      },
    ],
  };
}

export const teenSeriesTop50WithInfobox = {
  items: teenSeriesTop50WithSlug.items.map((show) => ({
    ...show,
    characters: (show.mainCharacters ?? []).map(convertToCharacterInfobox),
  })),
};

