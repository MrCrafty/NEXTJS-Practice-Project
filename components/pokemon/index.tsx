import PokeCard from "@/components/PokeCard";
import React from "react";

/*==============================Defining the type of data==============================*/

export type Data = {
  name: string;
  url: string;
};

/*==============================Main rendering function==============================*/

const Pokemon = ({ data }: { data: Data[] }) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl text-center mb-10">POKEMONS</h1>
      <div className="grid grid-cols-6 gap-5">
        {data?.map((item, index) => (
          <PokeCard data={item} key={index} id={index} />
        ))}
      </div>
    </div>
  );
};

export default Pokemon;

/*==============================Fetching the data statically during the build time==============================*/

export const getStaticProps = async () => {
  const res = await fetch(process.env.POKEMON_API_URL as string);
  const data = await res.json();
  return {
    props: {
      data: data.results,
    },
  };
};
