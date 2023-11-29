import React from "react";

interface props {
  searchTerm: string;
  onSearch: () => string;
}

function SearchInput({ searchTerm }: props) {
  return (
    <div className="relative md:w-[500px]">
      <div className="absolute inset-y-0 start-0 flex items-center ps-8 md:ps-8 pointer-events-none">
        <svg
          className="w-4 h-4 text-accent-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        type="text"
        name="search"
        value={searchTerm}
        className="shadow-lg text-accent-1 placeholder:text-accent-2 text-xs rounded-lg block w-full py-4 px-16 md:px-20 md:text-sm font-light bg-primary-1 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        placeholder="Search for a country..."
      />
    </div>
  );
}

export default SearchInput;
