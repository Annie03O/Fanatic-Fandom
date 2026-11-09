import { Show } from "@/app/models/types/structure/Show";
import { Character } from "../../models/types/characters/Character";
import { InfoField } from "../../models/types/structure/InfoboxCategory";
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

    const relsFriends = [...rels].sort(
      (a,b) => 
        Number(b.kindOfFriendship === "Best Friend") -
        Number(a.kindOfFriendship === "Best Friend")
    );

  const friends = relsFriends
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


    const relsRomance = [...rels].sort(
      (a,b) => 
        Number(b.romantic === "Wife/Husband" || b.romantic === "Fiancé" || b.romantic === "Girlfriend/Boyfriend") -
        Number(a.romantic === "Wife/Husband" || b.romantic === "Fiancé" || b.romantic === "Girlfriend/Boyfriend")
    );

  const romance = relsRomance
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

  const allFields: InfoField[] = [
    fullName ? { label: "Full Name", info: fullName,
      category: "Biography"
     } : null,
    character.nickname?.length 
      ? { 
        label: "Nicknames", 
        info: character.nickname 
      } 
      : null,
    character.birthday?.length 
    ? { 
      label: "Born", 
      info: character.birthday, category: "Biography" 
    } 
      : null,
    character.dateOfDeath?.length 
    ? {
      label: "Deceased",
      info: character.dateOfDeath,
      category: "Biography"
    } : null,
    character.causeOfDeath?.length 
    ? {
      label: "Cause of Death",
      info: character.causeOfDeath
    } : null,
    character.status?.length 
    ? {
      label: "Status",
      info: character.status === "Deceased" ? "Deceased" 
       : "Alive", 
       category: "Biography"
    } : null,
    character.hairColor?.length
     ? {
       label: "Hair Color", 
       info: character.hairColor,
       category: "Appearances"
      } 
       : null,
    character.eyeColor?.length 
    ? { 
      label: "Eye Color", 
      info: character.eyeColor, 
       category: "Appearances"
    } 
      : null,
    character.residence?.length 
    ? {
      label: "Residence",
      info: character.residence
    } : null,
     character.occupation?.toString().length
     ? { 
      label: "Occupation", 
      info: character.occupation, category: "Career" 
     } 
     : null,
    character.education?.toString().length 
    ? { 
      label: "Education", 
      info: character.education 
    } 
    : null,
    
    maritalStatus 
    ? { 
      label: "Marital Status", 
      info: maritalStatus 
    } 
      : null,
    family.length 
    ? { 
      label: "Family", 
      info: family, 
      category: "Relationships" 
    } 
      : null,
    friends.length 
    ? { 
      label: "Friends", 
      info: friends,
      category: "Relationships" 
    } 
    : null,
    romance.length 
    ? { 
      label: "Romance", 
      info: romance,
      category: "Relationships" 
    } 
    : null,
    
    character.everyEpisode === true || String(character.episodeCount ?? "").trim().length > 0
    ? {
      label: "Episode Count",
      info: character.everyEpisode === true
        ? String(show.numberOfEpisodes)
        : String(character.episodeCount),  category: "Backstage"
    } 
    : null,
  ];

  const fields = allFields.filter(isInfoField);

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
