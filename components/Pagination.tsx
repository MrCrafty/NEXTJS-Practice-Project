import { Data } from "@/@types/Data";
import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Pagination = ({
  FinalData,
  Page,
  setPage,
  TotalPages,
}: {
  FinalData: Data[];
  Page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  TotalPages: number[];
}) => {
  return (
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
  );
};

export default Pagination;
