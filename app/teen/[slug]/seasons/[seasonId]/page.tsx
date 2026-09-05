import Season from "@/app/components/Seasons/Season";
import { teenSeriesWithSlug } from "@/app/functions/WithSlug/teenSeriesWithSlug";
import { notFound } from "next/navigation";


export function generateStaticParams() {
    return teenSeriesWithSlug.items.flatMap((series) =>
        (series.seasons ?? []).map((season) => ({
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
  const series = teenSeriesWithSlug.items.find((item) => item.slug === slug);
  const season = series?.seasons?.find((item) => item.id === seasonId);

  if (!series || !season) notFound();

  return (
    <Season/>
  );
}
export default SeasonPage;