import React from "react";

const SortingByButtons = ({
  setSortBy,
  SortBy,
}: {
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  SortBy: string;
}) => {
  return (
    <div className="w-full">
      <h2 className="text-2xl mr-5 inline-block">SortBy: </h2>
      <select
        name="sort-by"
        id="sort-by"
        className="text-xl inline-block md:hidden border-b-2 border-slate-300"
        onChange={(e) => {
          e.target.value == "title" ? setSortBy("title") : setSortBy("price");
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
  );
};

export default SortingByButtons;
