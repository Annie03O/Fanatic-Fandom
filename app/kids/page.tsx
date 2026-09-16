import Link from "next/link";
import { kidsSeriesWithSlug } from "../functions/WithSlug/kidsSeriesWithSlug";
import chunk from "../functions/Layout/chunk";
import ShowPage from "../components/ShowPage";
import ShowPortal from "../components/ShowPortal";

const KidsPage = () => {
    return (
         <article className="flex flex-wrap gap-10 items-center justify-center">
            {kidsSeriesWithSlug.items.map((i) => {
                return <ShowPortal key={i.slug} show={i} genre="kids" title={i.slug} />
            })
             
            }
        </article>       
    )
}

export default KidsPage