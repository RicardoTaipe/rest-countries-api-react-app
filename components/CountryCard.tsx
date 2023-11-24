import React from "react";
import Image from "next/image";
import { Country } from "@/pages";

function CountryCard({ country }: { country: Country }) {
  return (
    <div className="shadow-md rounded-md text-xs overflow-hidden">
      <Image
        src={country.flags.svg}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
        width={260}
        height={160}
        alt={country.flags.alt}
      />
      <div className="px-6 pt-6 pb-12 bg-primary-1">
        <p className="font-bold text-lg">{country.name.common}</p>
        <p className="pt-4">
          <span className="font-semibold">Population: </span>
          {country.population}
        </p>
        <p className="py-2">
          <span className="font-semibold">Region: </span>Europe
        </p>
        <p>
          <span className="font-semibold">Capital: </span>
          {country.capital.at(0)}
        </p>
      </div>
    </div>
  );
}

export default CountryCard;
