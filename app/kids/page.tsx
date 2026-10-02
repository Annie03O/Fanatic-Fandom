import Link from "next/link";
import { kidsSeriesWithSlug } from "../functions/WithSlug/kidsSeriesWithSlug";
import chunk from "../functions/Layout/chunk";
import ShowPage from "../components/Show/ShowPage";
import ShowPortal from "../components/Show/ShowPortal";
import { seriesBetaWithSlug } from "../functions/dramaSeriesTop50WithSlug";

const KidsPage = () => {
    return (
         <article className="flex flex-wrap gap-10 items-center justify-center bg-black p-3">
            {seriesBetaWithSlug.items
                          .filter((i) => i.tags?.some((tag) => tag.toLowerCase() === "kids"  ))
                          .map((i) => {
                  
                return <ShowPortal key={i.slug} show={i} genre="kids" title={i.slug} />
            })
             
            }
        </article>       
    )
}

export default KidsPage