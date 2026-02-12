import { Character } from "../../models/types/Character";
import { InfoField } from "../../models/types/Infobox";
import { Relationship } from "../../models/types/Relationship";
import { formatFamilyShip } from "../Format/formatFamilyShip";
import { formatFriendShip } from "../Format/formatFriendShip";
import { formatMaritalStatus } from "../Format/formatMaritalStatus";
import { formatRomance } from "../Format/formatRomance";
import { teenSeriesTop50WithSlug } from "../teenSeriesTop50WithSlug";

const isInfoField = (x: InfoField | null): x is InfoField => x !== null;

export function convertToShipInfobox(ship: Relationship) {
  const fields: InfoField[] = [
   ship.name?.length ? ship.name : null,
   ship.shortDesc?.length ? ship.s

  ].filter(isInfoField);

  return {
    ...ship,
    infobox: [
      {
        name: ship.name,
        posterSrc: ship.imgUrl,
        fields,
      },
    ],
  };
}

export const teenSeriesTop50WithInfobox = {
  items: teenSeriesTop50WithSlug.items.map((show) => ({
    ...show,
    characters: (show.mainCharacters ?? []).map((c) => (c.relationships)),
  })),
};

