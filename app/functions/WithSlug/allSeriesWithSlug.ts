import { Show } from "@/app/models/types/Show";
import { dramaSeries } from "../../models/objects/dramaSeries";
import { toRouteSlug } from "../toRouteSlug";
import { allSeries } from "@/app/models/objects/allSeries";

type RelatedShowWithSlug = NonNullable<Show["related"]>[number] & {
  slug: string;
};

const mapRelated = (
  related: NonNullable<Show["related"]>[number],
  index: number,
): RelatedShowWithSlug => ({
  ...related,
  slug: toRouteSlug(related.title ?? related.id ?? `related-show-${index}`),
});

const mapShow = (show: Show): Show & { slug: string; related?: RelatedShowWithSlug[] } => ({
  ...show,
  slug: toRouteSlug(show.title ?? show.id),
  related: show.related?.map(mapRelated),
});

export const allSeriesWithSlug = {
  ...allSeries,
  items: allSeries.map(mapShow),
};

