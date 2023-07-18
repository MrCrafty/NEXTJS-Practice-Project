"use client";

import React from "react";
import { Data } from "@/utils/types";
//@ts-ignore
import ReactStars from "react-rating-stars-component";

export default function ProductDetails({ data }: { data: Data }) {
  return (
    <div className="w-auto">
      <span className="inline-block">
        <ReactStars
          count={5}
          size={24}
          value={data?.rating}
          edit={false}
          isHalf={true}
        />
      </span>

      <h2 className="text-3xl text-stone-700 my-2">{data?.title}</h2>
      <h3 className="text-4xl text-slate-900 my-2">${data?.price}</h3>
      <p className="inline-block text-slate-400">
        was
        <sup className="ml-1">$</sup>
        <s>
          {Math.floor((data?.price * data?.discountPercentage) / 100) +
            data?.price}
        </s>
      </p>
      <p className="inline-block text-sm text-slate-600 ml-1">
        ({data?.discountPercentage}% off )
      </p>
      <h4 className="text-slate-400 text-md mt-3">
        Brand: <em className="text-slate-900">{data?.brand}</em>
      </h4>
    </div>
  );
}
