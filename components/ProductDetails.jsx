"use client";

import React from "react";
import Link from "next/link";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

export default function ProductDetails({ data }) {
  return (
    <div className="w-9/12">
      <h2 className="text-4xl text-stone-200">{data?.title}</h2>
      <h3 className="text-md text-slate-200">Price: ${data?.price}</h3>
      <div className="p-5 border-2 text-center border-cyan-100 my-10">
        <h2 className="text-center w-auto inline-block border-b-2 mb-5 text-stone-200 text-xl">
          Description
        </h2>
        <p className="text-sm text-slate-400">{data?.description}</p>
      </div>
      <div className="flex justify-between mt-5 [&>a]:text-stone-800 [&>a]:bg-cyan-300">
        <Link
          href={`/products/${data?.id == 1 ? 1 : data?.id - 1}`}
          className=" px-10 py-2 rounded-full items-center flex"
        >
          <AiOutlineArrowLeft className="inline mr-2" />
          Prev
        </Link>
        <Link
          href={"/products"}
          className=" px-10 py-2 rounded-full items-center flex"
        >
          Home
        </Link>
        <Link
          href={`/products/${data?.id + 1}`}
          className=" px-10 py-2 rounded-full items-center flex"
        >
          Next
          <AiOutlineArrowRight className="inline ml-2" />
        </Link>
      </div>
    </div>
  );
}
