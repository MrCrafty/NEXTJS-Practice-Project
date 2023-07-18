import React from "react";

const SortingOrderButtons = ({
  SortBy,
  setIsAsc,
  IsAsc,
}: {
  SortBy: string;
  IsAsc: boolean;
  setIsAsc: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
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
  );
};

export default SortingOrderButtons;
