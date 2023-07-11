import React from "react";
import Link from "next/link";

export default function index() {
  return (
    <div>
      <Link href={"/products/1"}>Click here to view the first product</Link>
    </div>
  );
}
