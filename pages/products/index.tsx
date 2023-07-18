/*==============================importing necessary modules==============================*/
import React, { ChangeEvent, useState } from "react";
import { Data } from "@/@types/Data";
import SearchBar from "@/components/SearchBar";
import SortingOrderButtons from "@/components/SortingOrderButtons";
import SortingByButtons from "@/components/SortingByButtons";
import Pagination from "@/components/Pagination";
import ProductListing from "@/components/ProductListing";
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
        <SearchBar handleSearch={handleSearch} />
        <div className="mt-10 border-y-2 border-slate-100 py-5">
          {/*==============================Ascending and Descending sort buttons==============================*/}
          <SortingOrderButtons
            IsAsc={IsAsc}
            SortBy={SortBy}
            setIsAsc={setIsAsc}
          />
          {/*==============================SortBy Buttons==============================*/}
          <SortingByButtons SortBy={SortBy} setSortBy={setSortBy} />
        </div>
        {/*==============================Main Product List rendering==============================*/}
        <ProductListing FinalData={FinalData} Page={Page} compare={compare} />
        {/*==============================Pagination List==============================*/}
        <Pagination
          FinalData={FinalData}
          Page={Page}
          TotalPages={TotalPages}
          setPage={setPage}
        />
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
