import { CharacterPortals } from "@/app/components/Characters/CharactersPortals";
import { comedySeriesWithSlug } from "@/app/functions/WithSlug/comedySeriesWithSlug";

export function generateStaticParams() {
    return comedySeriesWithSlug.items.map((series) => ({
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
      
  const series = comedySeriesWithSlug.items.find((s) => s.slug === slug)
      
  
  if (!series) return <section>Series not found</section>
          
    
  return (
    <CharacterPortals show={series} genre="comedy" page={true}/>
  );
}
