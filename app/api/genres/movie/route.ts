import { NextResponse } from "next/server";

export async function GET() {
    const apiKey = process.env.TMDB_API_KEY;

    if (!apiKey) {
        return NextResponse.json(
            {error: "TMDB_API_KEY saknas i .env.local"}, 
            {status: 500}
        );
    }

    const url = new URL("https://api.themoviedb.org/3/genre/movie/list");
    url.searchParams.set("api_key", apiKey);
    url.searchParams.set("language", "sv-SE");

    const res = await fetch(url.toString(), {next: {revalidate: 60 * 60}});
    const text = await res.text();

    if (!res.ok) {
        return NextResponse.json(
            {error: "TMDB request failed", status: res.status, body: text},
            {status: res.status}
        )
    }

    return NextResponse.json(JSON.parse(text))
}