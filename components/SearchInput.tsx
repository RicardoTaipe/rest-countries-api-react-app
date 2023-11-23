import React from "react";

function SearchInput() {
  return (
    <div className="relative md:w-[500px]">
      <div className="absolute inset-y-0 start-0 flex items-center ps-16 md:ps-8 pointer-events-none">
        <svg
          className="w-6 h-6 text-accent-2"
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
        className="shadow-lg text-accent-1 placeholder:text-accent-2 text-2xl rounded-lg block w-full py-9 md:py-6 px-32 md:px-20 md:text-base font-light bg-primary-1 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        placeholder="Search for a country..."
      />
    </div>
  );
}

export default SearchInput;
