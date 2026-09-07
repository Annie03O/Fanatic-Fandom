import Soundtrack from "@/app/components/Music/Soundtrack";
import { teenSeriesWithSlug } from "@/app/functions/WithSlug/teenSeriesWithSlug";
import { notFound } from "next/navigation";


export function generateStaticParams() {
    return teenSeriesWithSlug.items.flatMap((series) =>
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
  const series = teenSeriesWithSlug.items.find((item) => item.slug === slug);
  const soundtrack = series?.soundtrack.find((item) => item.id === soundtrackId);

  if (!series || !soundtrack) notFound();

  return (
    <Soundtrack/>
  );
}
export default SoundtrackPage;