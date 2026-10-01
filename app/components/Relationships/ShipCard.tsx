import { generateLabel } from "@/app/functions/Format/generateLabels";
import { Relationship } from "@/app/models/types/structure/Relationship";

type Props = {
  item: Relationship;
};

export const ShipCard = ({ item }: Props) => {
  return (
    <section className="flex bg-[#f2e8ff] text-black min-h-[310px] h-fit w-full relative mr-1 inset-shadow-sm inset-shadow-gray-600 shadow-md shadow-gray-600 ring-2 ring-[#d1c3e3] rounded-xl overflow-hidden ">
      <section className="flex  flex-col w-2/3  p-2">
        <section className="flex flex-col gap-2 border-b border-gray-400">
          <h1 className="text-2xl">{item.name}</h1>
        </section>

        <section>
          <header className="text-lg">{generateLabel(item)}</header>
          <span>{item.shortDesc}</span>
        </section>
      </section>

      <section className="w-1/3 flex items-center relative ">
        <img
          className="object-cover object-center h-full w-full md:w-max absolute right-0"
          src={item.imgUrl}
          alt={"Image of " + item.name}
        />
      </section>
    </section>
  );
};
