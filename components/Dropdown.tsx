import React from "react";

function Dropdown() {
  return (
    <div>
      <button
        className="text-accent-1 bg-primary-1 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-4 text-center inline-flex items-center justify-between"
        type="button"
      >
        <span>Filter by Region</span>
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div className="">
        <div>Africa</div>
        <div>America</div>
        <div>Asia</div>
        <div>Europe</div>
        <div>Oceania</div>
      </div>
    </div>
  );
}

export default Dropdown;
