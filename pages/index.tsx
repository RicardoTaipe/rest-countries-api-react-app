import Image from "next/image";

import SearchInput from "@/components/SearchInput";
import Dropdown from "@/components/Dropdown";
import CountryList from "@/components/CountryList";

export default function Home() {
  return (
    <div className="w-11/12 max-w-7xl mx-auto min-h-screen mt-5 border-2 border-red-600">
      <div className="flex flex-col md:flex-row md:justify-between gap-16">
        <SearchInput />
        <Dropdown />
      </div>
      <CountryList />
    </div>
  );
}
