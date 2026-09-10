import { CharacterPortals } from "@/app/components/Characters/CharactersPortals";
import { dramaSeriesWithSlug } from "@/app/functions/WithSlug/dramaSeriesWithSlug";

export function generateStaticParams() {
    return dramaSeriesWithSlug.items.map((series) => ({
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
      
  const series = dramaSeriesWithSlug.items.find((s) => s.slug === slug)
      
  
  if (!series) return <section>Series not found</section>
          
    
  return (
    <CharacterPortals show={series} genre="drama" page={true}/>
  );
}
