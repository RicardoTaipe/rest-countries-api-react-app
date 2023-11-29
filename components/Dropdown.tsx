import { useState } from "react";

function Dropdown() {
  const options = ["Africa", "America", "Asia", "Europe", "Oceania"];
  const [isOpen, setIsOpen] = useState(false);
  const [indexSelected, setIndexSelected] = useState<number | null>(null);

  function toggleOptions(event: React.MouseEvent<HTMLElement>) {
    event.stopPropagation();
    setIsOpen(!isOpen);
  }

  function handleClick(event: React.MouseEvent<HTMLElement>) {
    event.stopPropagation();
    setIsOpen(false);
    setIndexSelected(
      options.findIndex((option) => option === event.currentTarget.innerText)
    );
  }

  return (
    <div className="max-w-[200px] text-sm relative flex-1 z-10">
      <button
        onClick={toggleOptions}
        className="text-accent-1 w-full bg-primary-1 font-light rounded-lg px-6 py-4 text-center text-xs md:text-sm inline-flex items-center justify-between cursor-pointer shadow-md"
        type="button"
      >
        <span>{options[indexSelected!] ?? "Filter by Region"}</span>
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

      <div
        className={`absolute right-0 w-full mt-2 p-6 bg-primary-1 shadow-md rounded-lg text-xs md:text-sm space-y-1 transition-transform origin-top-right ${
          isOpen ? "opacity-100 scale-1" : "opacity-20 scale-0"
        }`}
      >
        {options.map((option, index) => {
          return (
            <div
              key={index}
              className={`hover:bg-gray-100 cursor-pointer ${
                index == indexSelected ? "font-bold" : ""
              }`}
              onClick={handleClick}
            >
              {option}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Dropdown;
