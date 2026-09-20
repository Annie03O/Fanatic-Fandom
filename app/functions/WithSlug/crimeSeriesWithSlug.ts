import { Show } from "@/app/models/types/Show";
import { crimeSeries } from "../../models/objects/crimeSeries";
import { toRouteSlug } from "../toRouteSlug";

type RelatedShowWithSlug = NonNullable<Show["related"]>[number] & {
  slug: string;
};

const mapRelated = (related: NonNullable<Show["related"]>[number]): RelatedShowWithSlug => ({
  ...related,
  slug: toRouteSlug(related.title ?? related.id),
});


const mapShow = (show: Show): Show & { slug: string; related?: RelatedShowWithSlug[] } => ({
  ...show,
  slug: toRouteSlug(show.title),
  related: show.related?.map(mapRelated),
});

export const crimeSeriesWithSlug = {
  ...crimeSeries,
  items: crimeSeries.map(mapShow)
};