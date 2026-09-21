import { CharacterPortals } from "@/app/components/Characters/CharactersPortals";
import { fantasySeriesWithSlug } from "@/app/functions/WithSlug/fantasySeriesWithSlug";

export function generateStaticParams() {
    return fantasySeriesWithSlug.items.map((series) => ({
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
      
  const series = fantasySeriesWithSlug.items.find((s) => s.slug === slug)
      
  
  if (!series) return <section>Series not found</section>
          
    
  return (
    <CharacterPortals show={series} genre="drama" page={true}/>
  );
}
