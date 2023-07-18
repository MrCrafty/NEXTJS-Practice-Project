import React, { useState } from "react";
import Image from "next/image";
import ProductDetails from "../../components/ProductDetails";
import { Data } from "@/@types/Data";
import { BsArrowLeft } from "react-icons/bs";
import Link from "next/link";

const Product = ({ data }: { data: Data }) => {
  const [ImageUrl, setImageUrl] = useState(data?.images[0]);
  return (
    <div className="min-h-screen container mx-auto lg:pt-10 font-Poppins">
      <Link
        href={"/products"}
        className="mb-10 flex items-center text-xl hover:text-slate-600"
      >
        <BsArrowLeft className="mr-1" /> Back
      </Link>
      <div className=" flex flex-col md:flex-row">
        <div className="w-full mb-10 md:mb-0 md:mr-10 flex md:flex-row ">
          <div className="w-3/12 md:w-2/12 gap-3 mx-auto flex flex-col mr-5 md:mr-10">
            <Image
              src={data?.images[0]}
              width={5000}
              height={7000}
              alt="product-image"
              className={`w-full cursor-pointer border-2 border-red-200`}
              onClick={(e) => {
                setImageUrl(e.currentTarget.src);
              }}
            />
            <Image
              src={data?.images[1]}
              width={5000}
              height={7000}
              alt="product-image"
              className="w-full cursor-pointer border-2 border-red-200"
              onClick={(e) => {
                setImageUrl(e.currentTarget.src);
              }}
            />
            <Image
              src={data?.images[2]}
              width={5000}
              height={7000}
              alt="product-image"
              className="w-full cursor-pointer border-2 border-red-200"
              onClick={(e) => {
                setImageUrl(e.currentTarget.src);
              }}
            />
          </div>
          <Image
            src={ImageUrl}
            width={5000}
            height={7000}
            alt="product-image"
            className="w-9/12 md:w-10/12 border-2"
          />
        </div>
        <ProductDetails data={data} />
      </div>
      <div className=" mt-52">
        <h3 className="text-center text-4xl -mb-2">Description</h3>
        <div className="border-t-2 border-slate-100 p-5">
          <p className="text-slate-500 text-center">{data?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;

/*==============================Fetched the data using getStaticProps==============================*/

export const getStaticProps = async ({
  params: { id },
}: {
  params: { id: number };
}) => {
  const res = await fetch((process.env.API_URL as string) + "/products/" + id);
  const data = await res.json();
  return {
    props: {
      data,
    },
    revalidate: 10,
  };
};

/*==============================Defined the paths for which the getStaticProps have to get data build the static page==============================*/

export const getStaticPaths = async () => {
  const res = await fetch((process.env.API_URL as string) + "/products/");
  const data = await res.json();
  const paths = data?.products?.map((post: Data) => {
    return {
      params: {
        id: post?.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
