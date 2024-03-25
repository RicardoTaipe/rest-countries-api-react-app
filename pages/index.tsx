import Image from "next/image";

import SearchInput from "@/components/SearchInput";
import Dropdown, { Option } from "@/components/Dropdown";
import { useState, useEffect } from "react";
import CountryList from "@/components/CountryList";

export interface Country {
  name: { common: string };
  region: string;
  population: number;
  capital: [string];
  flags: { svg: string; alt: string };
}

export interface CountryListProps {
  data: Country[];
}

const options = [
  { label: "Africa", value: "africa" },
  { label: "America", value: "america" },
  { label: "Asia", value: "asia" },
  { label: "Europe", value: "europe" },
  { label: "Oceania", value: "oceania" },
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [byRegion, setByRegion] = useState<null | Option>(null);
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    // const fetchCountries = async () => {
    //   const response = await fetch("https://restcountries.com/v3.1/all");
    //   const data = await response.json();
    //   setCountries(data.slice(1, 9));
    // };
    // fetchCountries();
  }, []);

  const handleSearch = (country: string) => {
    // const searchCountry = async () => {
    //   const response = await fetch(
    //     `https://restcountries.com/v3.1/name/${country}?fullText=true`
    //   );
    //   const data = await response.json();
    //   setCountries(data);
    // };
    // searchCountry();
  };

  const filterByRegion = (region: Option) => {
    setByRegion(region);
    console.log(region);
    //make API call
    //https://restcountries.com/v3.1/region/{region}
  };

  return (
    <div className="w-11/12 max-w-7xl mx-auto min-h-screen mt-5 md:mt-10">
      <div className="flex flex-col md:flex-row md:justify-between gap-10">
        <SearchInput
          searchTerm={searchTerm}
          onSearch={setSearchTerm}
          onSubmit={handleSearch}
        />
        <Dropdown
          options={options}
          onChange={filterByRegion}
          value={byRegion}
        />
      </div>

      {/* <CountryList data={countries} /> */}
    </div>
  );
}
