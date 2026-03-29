import { teenSeries } from "../models/objects/teenSeriesTop50";
import { toRouteSlug } from "./toRouteSlug";

export const teenCharsWithSlug = {
  ...teenSeries,
  items: teenSeries.map((s) => ({
    ...s,
    mainCharacters: s.mainCharacters?.map((c) => ({
        ...c,
        id: toRouteSlug(c.id)
    })),
  })),
};
