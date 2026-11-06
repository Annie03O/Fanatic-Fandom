import { Show } from "@/app/models/types/structure/Show";
import { Character } from "../../models/types/characters/Character";
import { InfoField } from "../../models/types/structure/layouts/Infobox";
import { Relationship } from "../../models/types/structure/Relationship";
import { formatFamilyShip } from "../Format/formatFamilyShip";
import { formatFriendship } from "../Format/formatFriendShip";
import { formatMaritalStatus } from "../Format/formatMaritalStatus";
import { formatRomance } from "../Format/formatRomance";
import { seriesBetaWithSlug } from "\.\./WithSlug/allSeriesWithSlug";
import { getCharacterRelationships } from "@/app/models/objects/images";

const isInfoField = (x: InfoField | null): x is InfoField => x !== null;

export function convertToCharacterInfobox(show: Show, character: Character) {
  const rels = [
    ...(show.relationships ?? []).filter((relationship) =>
      relationship.characters?.some((person) => person.id === character.id)
    ),
    ...getCharacterRelationships(character),
  ]
    .filter((relationship): relationship is Relationship => Boolean(relationship))
    .map((relationship) => ({
      ...relationship,
      name:
        relationship.name ??
        relationship.characters?.find((person) => person.id !== character.id)?.label,
    }))
    .filter((relationship, index, relationships) => {
      const key = relationship.id ?? [
        relationship.type,
        relationship.family,
        relationship.romantic,
        relationship.kindOfFriendship,
        relationship.name,
        relationship.gender,
        relationship.characters?.map((person) => person.id).sort().join(","),
      ].join("|");

      return relationships.findIndex((candidate) => {
        const candidateKey = candidate.id ?? [
          candidate.type,
          candidate.family,
          candidate.romantic,
          candidate.kindOfFriendship,
          candidate.name ??
            candidate.characters?.find((person) => person.id !== character.id)?.label,
          candidate.gender,
          candidate.characters?.map((person) => person.id).sort().join(","),
        ].join("|");

        return candidateKey === key;
      }) === index;
    });

  const friends = rels.
    map((formatFriendship)).
    filter((f): f is string => Boolean(f)) ;
  const family = rels
    .map((relationship) =>
      formatFamilyShip(
        relationship,
        relationship.gender === "F" || relationship.gender === "M"
          ? relationship.gender
          : character.gender,
      )
    )
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
        fields
      },
    ],
  };
}

export const dramaSeriesWithInfobox = {
  items: seriesBetaWithSlug.items.map((show) => ({
    ...show,
    characters: (show.mainCharacters ?? []).map((character) =>
      convertToCharacterInfobox(show, character)
    ),
  })),
};
