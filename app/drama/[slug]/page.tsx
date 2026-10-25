import { createElement, type ComponentType } from "react";
import ShowPage from "@/app/components/Show/ShowPage";
import { allSeriesWithSlug } from "@/app/functions/WithSlug/allSeriesWithSlug";


export function generateStaticParams() {
    return allSeriesWithSlug.items.flatMap((series) => [
        { slug: series.slug },
        ...(series.id === series.slug ? [] : [{ slug: series.id }]),
    ]);
}


function TeenPage() {
    return createElement(
        ShowPage as unknown as ComponentType<{ genre: "drama" }>,
        { genre: "drama" },
    );
}

export default TeenPage;
