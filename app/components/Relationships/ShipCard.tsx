import { generateLabel } from "@/app/functions/Format/generateLabel";
import { Relationship } from "@/app/models/types/Relationship";

type Props = {
  item: Relationship;
};

export const ShipCard = ({ item }: Props) => {
  return (
    <section className="flex  h-[300px] relative ">
      <section className="flex border flex-col w-2/3 p-1">
        <section>
          <h1 className="text-2xl">{item.name}</h1>
        </section>

        <section>
          <header className="text-lg">{generateLabel(item)}</header>
          <span>{item.shortDesc}</span>
        </section>
      </section>

      <section className="w-[200px] border flex items-center relative ">
        <img
          className="object-cover object-center h-full w-full md:w-max absolute right-0"
          src={item.imgUrl}
          alt={"Image of " + item.name}
        />
      </section>
    </section>
  );
};
