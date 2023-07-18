import Image from "next/image";
import Link from "next/link";
import React from "react";

const PokemonDetails = ({ data }: { data: any }) => {
  return (
    <div>
      <div>
        {
          <Image
            src={data?.sprites?.other?.dream_world?.front_default}
            height={100}
            width={100}
            alt=""
            className="w-2/12"
          />
        }
      </div>
      <div>
        <h2 className="text-5xl">Weight</h2>
        {data?.weight}
      </div>
      <div>
        <h2 className="text-5xl">Forms</h2>

        <ul>
          {data?.forms?.map((item: any, index: number) => (
            <li key={index}>{item?.name}</li>
          ))}
        </ul>
        <h2 className="text-5xl">Moves</h2>
      </div>
      <h2 className="text-5xl">Type</h2>
      <ul className="flex">
        {data?.types?.map((item: any, index: number) => (
          <li
            key={index}
            className="mr-5 text-xl px-5 py-2 uppercase bg-cyan-300"
          >
            {item?.type?.name}
          </li>
        ))}
      </ul>
      <div>
        <Link
          href={`${data?.id - 1}`}
          className="text-xl bg-slate-700 text-stone-200 px-3 py-2 mt-4"
        >
          Prev
        </Link>
        <Link
          href={`${data?.id + 1}`}
          className="text-xl bg-slate-700 text-stone-200 px-3 py-2 mt-4"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default PokemonDetails;

export const getStaticProps = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const res = await fetch((process.env.POKEMON_API_URL as string) + "/" + id);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(process.env.POKEMON_API_URL as string);
  const data = await res.json();
  const paths = Array.from(Array(data?.count).keys()).map((item: any) => ({
    params: { id: `${item?.id}` },
  }));
  return {
    paths,
    fallback: true,
  };
};
