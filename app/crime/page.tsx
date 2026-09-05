import { crimeSeriesWithSlug } from "../functions/WithSlug/crimeSeriesWithSlug";
import ShowPortal from "../components/ShowPortal";


export const CrimePage = () => {
  return (
    <section className="grid gap-y-10 gap-x-5 grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
      {crimeSeriesWithSlug.items.map((i) => {
        return <ShowPortal key={i.slug} show={i} title={i.slug} genre="crime"/>
      })}
    </section>
  );
};

export default CrimePage;