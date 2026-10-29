import { seriesBetaWithSlug } from "@/app/functions/WithSlug/allSeriesWithSlug";
import { comedySeriesWithSlug } from "@/app/functions/WithSlug/comedySeriesWithSlug";
import { crimeSeriesWithSlug } from "@/app/functions/WithSlug/crimeSeriesWithSlug";
import { fantasySeriesWithSlug } from "@/app/functions/WithSlug/fantasySeriesWithSlug";
import { kidsSeriesWithSlug } from "@/app/functions/WithSlug/kidsSeriesWithSlug";

export const slugCatalog = [
    {
      genre: "drama",
      item: seriesBetaWithSlug,
    },
    {
      genre: "crime",
      item: crimeSeriesWithSlug,
    },
    {
      genre: "kids",
      item: kidsSeriesWithSlug,
    },
    {
      genre: "comedy",
      item: comedySeriesWithSlug,
    },
    {
      genre: "fantasy",
      item: fantasySeriesWithSlug
    }
]