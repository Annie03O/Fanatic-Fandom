import { kidsSeries } from "@/app/models/objects/kidsSeries";
import { toRouteSlug } from "../toRouteSlug";

export const kidsSeriesWithSlug = {
    ...kidsSeries,
    items: kidsSeries.map((s) => ({
        ...s,
        slug: toRouteSlug(s.title),
    })),
};