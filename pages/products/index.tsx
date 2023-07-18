/*==============================importing necessary modules==============================*/
import React, { ChangeEvent, useState, useContext } from "react";
import { Data } from "@/@types/Data";
import { FaRegSadTear } from "react-icons/fa";
import { HiMagnifyingGlass } from "react-icons/hi2";
import ProductListingItem from "@/components/ProductListingItem";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
/*==============================Main Page function==============================*/
export default function ProductsListing({ data }: { data: Data[] }) {
  /*==============================Initialising States==============================*/
  const [FinalData, setFinalData] = useState<Data[]>(data);
  const [IsAsc, setIsAsc] = useState<boolean>(true);
  const [SortBy, setSortBy] = useState<string>("title");
  const [Page, setPage] = useState<number>(1);

  const TotalPages: number[] = Array.from(
    Array(Math.ceil(FinalData.length / 10))
  );
  /*==============================function for handling the search feature==============================*/
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    const finalData: Data[] = data?.filter((item) =>
      query.length >= 3
        ? item?.title.toLowerCase().includes(query.toLowerCase())
        : item
    );
    setFinalData(finalData);
  };

  /*==============================function for sorting the list==============================*/
  function compare(a: Data, b: Data) {
    if (
      (SortBy == "title" && a.title.toLowerCase() < b.title.toLowerCase()) ||
      (SortBy == "price" && a.price < b.price)
    ) {
      return IsAsc ? -1 : 1;
    }
    if (
      (SortBy == "title" && a.title.toLowerCase() > b.title.toLowerCase()) ||
      (SortBy == "price" && a.price > b.price)
    ) {
      return IsAsc ? 1 : -1;
    }
    return 0;
  }

  /*==============================Rendering the Listing component==============================*/
  return (
    <div className="font-Poppins">
      <div className="container mx-auto">
        {/*==============================Search Bar==============================*/}
        <div
          className=" mx-auto mt-10 w-11 p-2 flex transition-all duration-500 ease-in-out border-2 border-slate-400 rounded-full relative"
          onFocus={(e) => {
            e.currentTarget.classList.add("w-1/2");
            e.currentTarget.classList.remove("w-11");
          }}
          onBlur={(e) => {
            e.currentTarget.classList.remove("w-1/2");
            e.currentTarget.classList.add("w-11");
          }}
        >
          <HiMagnifyingGlass className="text-2xl absolute pointer-events-none" />
          <input
            type="text"
            className={`pl-10  outline-none w-full bg-transparent`}
            placeholder="Start typing to Search for a product"
            onChange={(e) => {
              handleSearch(e);
            }}
          />
        </div>
        <div className="mt-10 border-y-2 border-slate-100 py-5">
          {/*==============================Ascending and Descending sort buttons==============================*/}

          <div className="w-full">
            <h2 className="text-2xl mr-5 inline-block">SortOrder: </h2>
            <select
              name="sort-order"
              id="sort-order"
              className="inline-block md:hidden border-b-2 border-slate-300 text-xl"
              onChange={(e) => {
                e.target.value == "asc" ? setIsAsc(true) : setIsAsc(false);
              }}
              defaultValue="asc"
            >
              <option value="asc">
                {SortBy == "title" ? "A to Z" : "Low to High"}
              </option>
              <option value="des">
                {SortBy == "title" ? "Z to A" : "High to Low"}
              </option>
            </select>
            <div className="[&>button]:mr-5 my-5 hidden md:inline-block">
              <button
                onClick={() => {
                  setIsAsc(true);
                }}
                className={`transition-all duration-200 py-2 px-10 rounded-full ${
                  IsAsc
                    ? "bg-slate-800 text-red-200"
                    : "bg-neutral-200 text-slate-700"
                }`}
              >
                {SortBy == "title" ? "A to Z" : "Low to High"}
              </button>
              <button
                className={`transition-all duration-200 py-2 px-10 rounded-full ${
                  IsAsc
                    ? "bg-neutral-200 text-slate-700"
                    : "bg-slate-800 text-red-200"
                }`}
                onClick={() => {
                  setIsAsc(false);
                }}
              >
                {SortBy == "title" ? "Z to A" : "High to Low"}
              </button>
            </div>
          </div>
          {/*==============================SortBy Buttons==============================*/}

          <div className="w-full">
            <h2 className="text-2xl mr-5 inline-block">SortBy: </h2>
            <select
              name="sort-by"
              id="sort-by"
              className="text-xl inline-block md:hidden border-b-2 border-slate-300"
              onChange={(e) => {
                e.target.value == "title"
                  ? setSortBy("title")
                  : setSortBy("price");
              }}
              defaultValue="title"
            >
              <option value="title">Title</option>
              <option value="price">Price</option>
            </select>
            <div className="[&>button]:mr-5 my-5 hidden md:inline-block">
              <button
                onClick={() => {
                  setSortBy("title");
                }}
                className={`transition-all duration-200 py-2 px-10 rounded-full ${
                  SortBy == "title"
                    ? "bg-slate-800 text-red-200"
                    : "bg-neutral-200 text-slate-700"
                }`}
              >
                Title
              </button>
              <button
                onClick={() => {
                  setSortBy("price");
                }}
                className={`transition-all duration-200 py-2 px-10 rounded-full ${
                  SortBy == "price"
                    ? "bg-slate-800 text-red-200"
                    : "bg-neutral-200 text-slate-700"
                }`}
              >
                Price
              </button>
            </div>
          </div>
        </div>
        {/*==============================Main Product List rendering==============================*/}
        <div className="md:grid md:grid-cols-2 md:gap-2 lg:block mt-4">
          {FinalData.length > 10 ? (
            FinalData?.sort(compare)
              .slice((Page - 1) * 10, Page * 10)
              .map((item, index) => (
                <ProductListingItem data={item} key={index} />
              ))
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
        {/*==============================Pagination List==============================*/}
        <ul
          className={`w-full md:w-10/12 lg:w-8/12 mx-auto my-10 [&>li]:px-5 [&>li]:md:px-10 ${
            FinalData?.length > 10
              ? "flex flex-row justify-between items-center"
              : "hidden"
          }`}
        >
          <li
            className={`py-2 rounded-full bg-neutral-200 text-slate-700 ${
              Page == 1 ? "cursor-default invisible" : "cursor-pointer"
            }`}
            onClick={() => {
              Page > 1 ? setPage(Page - 1) : "";
            }}
          >
            <BsArrowLeft className="inline-block mr-1" />
            Prev
          </li>
          {FinalData?.length > 10
            ? TotalPages.map((item, index) => (
                <li
                  key={index}
                  className={`transition-all duration-200 py-2 rounded-full cursor-pointer ${
                    index + 1 == Page
                      ? "bg-slate-800 text-red-200"
                      : "bg-neutral-200 text-slate-700"
                  }`}
                  onClick={() => {
                    setPage(index + 1);
                  }}
                >
                  {index + 1}
                </li>
              ))
            : ""}
          <li
            className={`py-2 rounded-full bg-neutral-200 text-slate-700   ${
              Page == TotalPages.length
                ? "cursor-default invisible"
                : "cursor-pointer"
            }`}
            onClick={() => {
              Page < TotalPages.length ? setPage(Page + 1) : "";
            }}
          >
            Next
            <BsArrowRight className="inline-block ml-1" />
          </li>
        </ul>
      </div>
    </div>
  );
}

/*==============================Fetching data from the api and building static pages during build time==============================*/
export const getStaticProps = async () => {
  const res = await fetch((process.env.API_URL as string) + "/products");
  const data = await res.json();
  return {
    props: {
      data: data?.products,
    },
  };
};
