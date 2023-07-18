import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Data } from "@/@types/Data";
//@ts-ignore
import ReactStars from "react-rating-stars-component";

const ProductListingItem = ({ data }: { data: Data }) => {
  return (
    <div className="w-full flex border-2 border-slate-700 border-opacity-5 mb-5 flex-col lg:flex-row">
      <div className="lg:w-1/4 w-full overflow-hidden lg:max-h-52">
        <Image
          src={data?.thumbnail}
          height={1000}
          width={1000}
          alt="product image"
          className="w-full"
        />
      </div>
      <div className="md:ml-10 md:py-3 m-3">
        <Link
          className="text-3xl hover:text-red-500 transition-all duration-200"
          href={"/products/" + data?.id.toString()}
        >
          {data?.title}
        </Link>
        <ReactStars
          count={5}
          size={24}
          value={data?.rating}
          edit={false}
          isHalf={true}
        />
        <h3 className="[&>sup]:text-base text-3xl inline-block">
          <sup>$</sup>
          {data?.price}
        </h3>
        <p className="inline-block ml-2 text-slate-400">
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
        <p className="text-sm mt-2 text-slate-600">
          Hurry !!! Only <b className="text-red-600">{data?.stock}</b> left in
          stock
        </p>
      </div>
    </div>
  );
};

export default ProductListingItem;
