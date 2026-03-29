import Link from "next/link";

const featuredShows = [
  {
    id: 1,
    title: "Beverly Hills, 90210",
    genre: "Teen Drama",
    image:
      "https://static1.colliderimages.com/wordpress/wp-content/uploads/sharedimages/2024/04/beverly-hills-90210-tv-show-poster.jpg?q=49&fit=contain&w=480&dpr=2",
  },
  {
    id: 2,
    title: "Gossip Girl",
    genre: "Drama",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/Gossip_Girl_Season_1.jpg/250px-Gossip_Girl_Season_1.jpg",
  },
  {
    id: 3,
    title: "The O.C.",
    genre: "Teen Drama",
    image:
      "https://upload.wikimedia.org/wikipedia/en/1/17/TheOC_season1_DVD.jpg",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <section className="mx-auto flex max-w-7xl flex-col items-center px-6 py-20 text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] ">
          Welcome to Fanatic Fandom
        </p>

        <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
          Discover your favorite TV series and iconic characters
        </h1>

        <p className="mt-6 max-w-2xl text-base text-zinc-300 md:text-lg">
          Explore classic and modern tv series, read about characters, seasons,
          relationships, and find your next favorite show.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/shows"
            className="rounded-full bg-black px-6 py-3 font-medium text-white transition hover:bg-pink-400"
          >
            Browse Series
          </Link>
        </div>
      </section>

    </main>
  );
}