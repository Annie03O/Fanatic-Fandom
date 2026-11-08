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
  const relatedCharacters = (relationship: Relationship) =>
    relationship.characters?.flatMap((group) => group?.content ?? []) ?? [];

  const rels = [
    ...(show.relationships ?? []).filter((relationship) =>
      relatedCharacters(relationship).some((person) => person.id === character.id)
    ),
    ...getCharacterRelationships(character),
  ]
    .filter((relationship): relationship is Relationship => Boolean(relationship))
    .map((relationship) => ({
      ...relationship,
      name:
        relationship.name ??
        relatedCharacters(relationship).find((person) => person.id !== character.id)?.label,
    }))
    .filter((relationship, index, relationships) => {
      const key = relationship.id ?? [
        relationship.type,
        relationship.family,
        relationship.romantic,
        relationship.kindOfFriendship,
        relationship.name,
        relatedCharacters(relationship).map((person) => person.id).sort().join(","),
      ].join("|");

      return relationships.findIndex((candidate) => {
        const candidateKey = candidate.id ?? [
          candidate.type,
          candidate.family,
          candidate.romantic,
          candidate.kindOfFriendship,
          candidate.name ??
            relatedCharacters(candidate).find((person) => person.id !== character.id)?.label,
          relatedCharacters(candidate).map((person) => person.id).sort().join(","),
        ].join("|");

        return candidateKey === key;
      }) === index;
    });

  const friends = rels
    .map((relationship) => formatFriendship(relationship))
    .filter((f): f is string => Boolean(f));

  const family = rels
    .map((relationship) => {
      const relationshipGender =
        relatedCharacters(relationship).find((person) => person.id !== character.id)?.gender ??
        character.gender;


      const miniCharacter = relationship.characters?.find(
        (person) => person?.content && person.content.id !== character.id
      );

      if (!miniCharacter) return null;

      return formatFamilyShip(relationship, relationshipGender, miniCharacter);
    })
    .filter((s): s is string => Boolean(s));

    

  const romance = rels
    .map((ship) => {
      const otherGender =
        relatedCharacters(ship).find((person) => person.id !== character.id)?.gender ??
        character.gender;

      return formatRomance(ship, otherGender);
    })
    .filter((s): s is string => Boolean(s));


  const fullName =
    character.firstName?.length && character.lastName?.length
      ? `${character.firstName} ${character.lastName}`
      : null;
  

  const maritalStatus = formatMaritalStatus(character);

  const fields: InfoField[] = [
    fullName ? { label: "Full Name", info: fullName } : null,
    character.nickname?.length 
      ? { 
        label: "Nicknames", 
        info: character.nickname 
      } 
      : null,
    character.birthday?.length 
    ? { 
      label: "Born", 
      info: character.birthday 
    } 
      : null,
    character.dateOfDeath?.length 
    ? {
      label: "Deceased",
      info: character.dateOfDeath,
    } : null,
    character.causeOfDeath?.length 
    ? {
      label: "Cause of Death",
      info: character.causeOfDeath
    } : null,
    character.hairColor?.length
     ? {
       label: "Hair Color", 
       info: character.hairColor 
      } 
       : null,
    character.eyeColor?.length 
    ? { 
      label: "Eye Color", 
      info: character.eyeColor 
    } 
      : null,
    character.occupation?.toString().length
     ? { 
      label: "Occupation", 
      info: character.occupation 
     } 
     : null,
    character.education?.toString().length 
    ? { 
      label: "Education", 
      info: character.education 
    } 
    : null,
    character.status?.length 
    ? {
      label: "Status",
      info: character.status === "Deceased" ? "Deceased" 
       : "Alive" 
    } : null,

    maritalStatus 
    ? { 
      label: "Marital Status", 
      info: maritalStatus 
    } 
      : null,
    family.length 
    ? { 
      label: "Family", 
      info: family 
    } 
      : null,
    friends.length 
    ? { 
      label: "Friends", 
      info: friends
    } 
    : null,
    romance.length 
    ? { 
      label: "Romance", 
      info: romance
    } 
    : null, 
    character.actor?.length 
    ? {
       label: "Actor", 
      info: character.actor 
    } 
    : null,
    character.everyEpisode === true || character.firstEpisode?.length 
    ? {
      label: "First Episode", 
      info: character.everyEpisode === true ? show.pilot :
        show.pilot
    } 
    : null,
    character.everyEpisode === true || character.lastEpisode?.length 
    ? {
      label: "Last Episode", 
      info: character.everyEpisode === true ? show.finaleEpisode :
        show.finaleEpisode 
    } 
    : null,
    character.everyEpisode === true || String(character.episodeCount ?? "").trim().length > 0
    ? {
      label: "Episode Count",
      info: character.everyEpisode === true
        ? String(show.numberOfEpisodes)
        : String(character.episodeCount)
    } 
    : null
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
