import { MoviePortal } from "@/app/components/Seasons/MoviePortal";
import { crimeSeriesWithSlug } from "@/app/functions/WithSlug/crimeSeriesWithSlug";

export function generateStaticParams() {
    return crimeSeriesWithSlug.items.map((series) => ({
        slug: series.slug,
    }));
}

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function AllMoviesPage({ params }: Props) {
  const { slug } = await params;

    const series = crimeSeriesWithSlug.items.find((s) => s.slug === slug)

    if (!series) return <section>Series not found</section>
        
    
    return (
      <div className="flex flex-col  items-center bg-black w-[90%] min-h-[1000px]"> 
        
        <MoviePortal show={series} page={true} genre="crime"/>
      </div>
    )
}