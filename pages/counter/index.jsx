import React, { useEffect, useState } from "react";

export default function index() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Mounted");
    return () => {};
  }, []);
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Click
      </button>
    </div>
  );
}
