import Link from "next/link";


export default function Home() {
  return (
    <main className="min-h-screen w-full bg-black text-[#d1c3e3]">
      <section className="mx-auto flex max-w-7xl flex-col items-center px-6 py-20 text-center ">
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

      </section>
      <section className="flex">
        
      </section>
    </main>
  );
}
