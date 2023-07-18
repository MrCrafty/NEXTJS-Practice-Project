import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { ChangeEvent } from "react";

const SearchBar = ({
  handleSearch,
}: {
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
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
  );
};

export default SearchBar;
