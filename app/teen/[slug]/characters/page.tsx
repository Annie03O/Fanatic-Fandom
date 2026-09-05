import { CharacterPortals } from "@/app/components/Characters/CharactersPortals";
import { teenSeriesWithSlug } from "@/app/functions/WithSlug/teenSeriesWithSlug";

export function generateStaticParams() {
    return teenSeriesWithSlug.items.map((series) => ({
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
      
  const series = teenSeriesWithSlug.items.find((s) => s.slug === slug)
      
  
  if (!series) return <section>Series not found</section>
          
    
  return (
    <CharacterPortals show={series} genre="teen" page={true}/>
  );
}
