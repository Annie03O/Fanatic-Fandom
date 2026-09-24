import Season from "@/app/components/Seasons/Season";
import { allSeriesWithSlug } from "@/app/functions/WithSlug/allSeriesWithSlug";
import { notFound } from "next/navigation";


export function generateStaticParams() {
    return allSeriesWithSlug.items.flatMap((series) =>
    (series.seasons ?? [])
      .filter((season) => typeof season.id === "string" && season.id.length > 0)
      .map((season) => ({
        slug: series.slug,
        seasonId: season.id,
      }))
    );
}

type Props = {
  params: Promise<{
    slug: string;
    seasonId: string;
  }>;
};

async function SeasonPage({ params }: Props) {
  const { slug, seasonId } = await params;
  const series = allSeriesWithSlug.items.find((item) => item.slug === slug);
  const season = series?.seasons?.find((item) => item.id === seasonId);

  if (!series || !season) notFound();

  return (
    <Season/>
  );
}
export default SeasonPage;