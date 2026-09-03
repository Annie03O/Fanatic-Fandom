import { kidsSeries } from "@/app/models/objects/kidsSeries";
import { teenSeries } from "../../models/objects/teenSeriesTop50";
import { toRouteSlug } from "../toRouteSlug";

export const teenSeriesWithSlug = {
  ...teenSeries,
  items: teenSeries.map((s) => ({
    ...s,
    slug: toRouteSlug(s.title),
  })),
  ...kidsSeries,
  kids: kidsSeries.map((s) => ({
    ...s,
    slug: toRouteSlug(s.title),
  })),
};