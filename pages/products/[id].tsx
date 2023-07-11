import React from "react";
import Image from "next/image";
import ProductDetails from "../../components/ProductDetails";

type Data = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

const Product = ({ data }: { data: Data }) => {
  return (
    <div className="bg-slate-950 min-h-screen pt-10 lg:p-10">
      <div className="container mx-auto flex">
        <Image
          src={data?.images[0] ?? "https://www.dummyimage.com/500x700"}
          width={500}
          height={700}
          alt=""
          className="w-3/12 mr-10"
        />
        <ProductDetails data={data} />
      </div>
    </div>
  );
};

export default Product;
/*==============================Fetched the data using getServerSideProps==============================*/

// export const getServerSideProps = async ({
//   params: { id },
// }: {
//   params: { id: number };
// }) => {
//   const res = await fetch((process.env.API_URL as string) + "/products/" + id);
//   const data = await res.json();
//   console.log(data);
//   return {
//     props: { data },
//   };
// };

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
