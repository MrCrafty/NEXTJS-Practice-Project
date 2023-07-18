import React from "react";
import { Data } from "@/components/pokemon";
import Link from "next/link";

const PokeCard = ({ data, id }: { data: Data; id: number }) => {
  return (
    <Link
      className="w-full text-center p-10 text-2xl uppercase bg-slate-500"
      href={`/pokemon/${id + 1}`}
    >
      {data?.name}
    </Link>
  );
};

export default PokeCard;
