import React from "react";
import { useDebounce } from "../hooks/useDebounce";

export default function InputForDebounce() {
  const backendSearch = () => {
    console.log("backend called");
    fetch("https://api.race.namba.com");
  };
  const debouncedBackendSearch = useDebounce(backendSearch);

  return (
    <div>
      <h2>Search the product</h2>
      <input onChange={debouncedBackendSearch} />
    </div>
  );
}
