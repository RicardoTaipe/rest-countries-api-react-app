import Image from "next/image";

import SearchInput from "@/components/SearchInput";
import Dropdown from "@/components/Dropdown";
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

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [countries, setCountries] = useState<Country[]>([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountries(data.slice(1, 9));
    };
    fetchApi();
  }, []);

  return (
    <div className="w-11/12 max-w-7xl mx-auto min-h-screen mt-5 md:mt-10">
      <div className="flex flex-col md:flex-row md:justify-between gap-10">
        <SearchInput />
        <Dropdown />
      </div>
      <CountryList data={countries} />
    </div>
  );
}
