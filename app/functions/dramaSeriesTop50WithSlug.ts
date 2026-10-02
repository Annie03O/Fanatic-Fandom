
import { seriesBeta } from "../models/objects/allSeries";
import { dramaSeries } from "../models/objects/dramaSeries";
import { toRouteSlug } from "./toRouteSlug";

export const seriesBetaWithSlug = {
  ...seriesBeta,
  items: seriesBeta.map((s) => ({
    ...s,
    slug: toRouteSlug(s.title ?? s.id),
  })),
};
