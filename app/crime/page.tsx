import { crimeSeriesWithSlug } from "../functions/WithSlug/crimeSeriesWithSlug";
import ShowPortal from "../components/ShowPortal";


export const CrimePage = () => {
  return (
     <article className="flex flex-wrap gap-10 items-center justify-center">
      {crimeSeriesWithSlug.items.map((i) => {
        return <ShowPortal key={i.slug} show={i} title={i.slug} genre="crime"/>
      })}
    </article>
  );
};

export default CrimePage;