import { CharacterPortals } from "@/app/components/Characters/CharactersPortals";
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

export default async function AllCharacterPage({ params }: Props) {
  const { slug } = await params;
      
  const series = seriesBetaWithSlug.items.find((s) => s.slug === slug)
      
  
  if (!series) return <section>Series not found</section>
          
    
  return (
    <CharacterPortals show={series} genre="drama" page={true}/>
  );
}
