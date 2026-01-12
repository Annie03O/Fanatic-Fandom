import { teenSeriesTop50 } from "../models/objects/teenSeriesTop50";
import { toRouteSlug } from "./toRouteSlug";

export const teenCharsWithSlug = {
  ...teenSeriesTop50,
  items: teenSeriesTop50.items.map((s) => ({
    ...s,
    mainCharacters: s.mainCharacters?.map((c) => ({
        ...c,
        id: toRouteSlug(c.id)
    })),
  })),
};
