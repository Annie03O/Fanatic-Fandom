import { crimeSeriesWithSlug } from "../functions/WithSlug/crimeSeriesWithSlug";
import ShowPortal from "../components/ShowPortal";
import { allSeriesWithSlug } from "../functions/dramaSeriesTop50WithSlug";


export const CrimePage = () => {
  return (
     <article className="flex flex-wrap gap-10 items-center justify-center">
      {allSeriesWithSlug.items
        .filter((i) => i.tags?.some((tag) => tag.toLowerCase() === "crime"))
        .map((i) => {
      
        return <ShowPortal key={i.slug} show={i} title={i.slug} genre="crime"/>
      })}
    </article>
  );
};

export default CrimePage;