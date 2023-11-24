import React from "react";
import CountryCard from "./CountryCard";
import { CountryListProps } from "@/pages";

function CountryList({ data }: CountryListProps) {
  console.log("list", data);
  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-4 gap-10 rounded-md px-10 sm:px-0">
      {data.map((item, index) => (
        <CountryCard key={index} country={item} />
      ))}
    </div>
  );
}

export default CountryList;
