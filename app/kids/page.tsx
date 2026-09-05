import Link from "next/link";
import { kidsSeriesWithSlug } from "../functions/WithSlug/kidsSeriesWithSlug";
import chunk from "../functions/Layout/chunk";
import ShowPage from "../components/ShowPage";
import ShowPortal from "../components/ShowPortal";

const KidsPage = () => {
    return (
        <section className="grid gap-y-10 gap-x-5 grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
            {kidsSeriesWithSlug.items.map((i) => {
                return <ShowPortal key={i.slug} show={i} genre="kids" title={i.slug} />
            })
             
            }
        </section>       
    )
}

export default KidsPage