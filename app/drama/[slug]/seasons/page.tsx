import { SeasonsPortals } from "@/app/components/Seasons/SeasonsPortals";
import { seriesBetaWithSlug } from "@/app/functions/WithSlug/allSeriesWithSlug";

export function generateStaticParams() {
  return seriesBetaWithSlug.items.map((series) => ({
    slug: series.slug,
  }));
}

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function AllSeasonsPage({ params }: Props) {
  const { slug } = await params;
  const series = seriesBetaWithSlug.items.find((item) => item.slug === slug);

  if (!series) return <section>Series not found</section>;

  return (
    <div className="flex flex-col items-center bg-black w-[90%] min-h-[1000px]">
      <SeasonsPortals genre="drama" show={series} page={true} />
    </div>
  );
}