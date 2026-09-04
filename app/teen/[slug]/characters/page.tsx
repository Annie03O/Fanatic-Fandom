import { CharacterPortals } from "@/app/components/Characters/CharactersPortals";

export function generateStaticParams() {
  console.log("GENERATE STATIC PARAMS");

  return [
    {
      slug: "Beverly_Hills_90210",
    },
  ];
}

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function AllCharacterPage({ params }: Props) {
  const { slug } = await params;

  return (
    <div>
      Characters: {slug}
    </div>
  );
}
