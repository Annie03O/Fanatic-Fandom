import { toRouteSlug } from "../toRouteSlug";
import { crimeSeries } from "../../models/objects/crimeSeries";
import { teenSeries } from "@/app/models/objects/teenSeriesTop50";
import { kidsSeries } from "@/app/models/objects/kidsSeries";

export const seriesWithSlug = {
    ...crimeSeries,
    crimeItems: crimeSeries.map((s) => ({
        ...s,
        slug: toRouteSlug(s.title),
    })),
    ...teenSeries,
    teenItem : teenSeries.map((t) => ({
        ...t,
        slug: toRouteSlug(t.title)
    })),
    ...kidsSeries,
    kidsItem: kidsSeries.map((k) => ({
        ...k,
        slug: toRouteSlug(k.title)
    }))

};