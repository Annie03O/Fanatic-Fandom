import Soundtrack from "@/app/components/Music/Soundtrack";
import { comedySeriesWithSlug } from "@/app/functions/WithSlug/comedySeriesWithSlug";
import { notFound } from "next/navigation";


export function generateStaticParams() {
    return comedySeriesWithSlug.items.flatMap((series) =>
        (series.soundtrack ?? []).map((soundtrack) => ({
            slug: series.slug,
            soundtrackId: soundtrack.id,
        }))
    );
}

type Props = {
  params: Promise<{
    slug: string;
    soundtrackId: string;
  }>;
};

async function SoundtrackPage({ params }: Props) {
  const { slug, soundtrackId } = await params;
  const series = comedySeriesWithSlug.items.find((item) => item.slug === slug);
  const soundtrack = series?.soundtrack.find((item) => item.id === soundtrackId);

  if (!series || !soundtrack) notFound();

  return (
    <Soundtrack/>
  );
}
export default SoundtrackPage;