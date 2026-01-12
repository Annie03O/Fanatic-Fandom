import { teenSeries } from "../models/objects/teenSeriesTop50";
import { toRouteSlug } from "./toRouteSlug";

export const teenSeriesTop50WithSlug = {
  ...teenSeries,
  items: teenSeries.map((s) => ({
    ...s,
    slug: toRouteSlug(s.title),
  })),
};
