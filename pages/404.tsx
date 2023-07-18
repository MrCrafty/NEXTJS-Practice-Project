import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center min-h-screen">
        <h1 className="text-8xl md:text-9xl font-Poppins font-bold text-transparent text-center bg-gradient-to-r from-slate-500 to-stone-800 bg-clip-text">
          404
        </h1>
        <p className="text-xl md:text-4xl font-semibold text-transparent font-Poppins bg-gradient-to-r from-red-500 to-cyan-800 bg-clip-text">
          Oops!!! There&apos;s nothing here.
        </p>
        <Link
          href={"/products"}
          className="font-Poppins hover:text-red-300 hover:bg-slate-800 transition-all duration-200 my-2 py-2 px-10 rounded-full bg-neutral-200 text-slate-500"
        >
          {" "}
          Click here to return HOME
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
