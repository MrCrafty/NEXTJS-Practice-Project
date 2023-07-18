import React from "react";
import ProductListingItem from "./ProductListingItem";
import { FaRegSadTear } from "react-icons/fa";
import { Data } from "@/@types/Data";

const ProductListing = ({
  FinalData,
  compare,
  Page,
}: {
  FinalData: Data[];
  compare: (a: Data, b: Data) => number;
  Page: number;
}) => {
  return (
    <div className="md:grid md:grid-cols-2 md:gap-2 lg:block mt-4">
      {FinalData.length > 10 ? (
        FinalData?.sort(compare)
          .slice((Page - 1) * 10, Page * 10)
          .map((item, index) => <ProductListingItem data={item} key={index} />)
      ) : FinalData.length > 0 ? (
        FinalData?.sort(compare).map((item, index) => (
          <ProductListingItem data={item} key={index} />
        ))
      ) : (
        <h2 className="text-3xl text-center">
          <FaRegSadTear className="inline-block" />
          Sorry...No products match your search query
        </h2>
      )}
    </div>
  );
};

export default ProductListing;
