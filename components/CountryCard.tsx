import React from "react";
import Image from "next/image";
import { Country } from "@/pages";

function CountryCard({ country }: { country: Country }) {
  return (
    <div className="shadow-md rounded-md text-xs overflow-hidden">
      <div style={{ position: "relative", width: "290px", height: "160px" }}>
        <Image
          alt={country.flags.alt}
          src={country.flags.svg}
          sizes="290px"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="px-6 pt-6 pb-12 bg-primary-1">
        <p className="font-bold text-lg">{country.name.common}</p>
        <p className="pt-4">
          <span className="font-semibold">Population: </span>
          {country.population}
        </p>
        <p className="py-2">
          <span className="font-semibold">Region: </span>
          {country.region}
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
