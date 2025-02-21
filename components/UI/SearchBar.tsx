"use client";

import React, { useState, useEffect } from "react";

import { City } from "country-state-city";
import CityList from "./CityList";

export default function SearchBar(props: {
  onValueChange: (city: { latitude: number; longitude: number }) => void;
}) {
  /* State & their initial values */
  const [searchValue, setSearchValue] = useState("");
  const [listVisibility, setListVisibility] = useState("hidden");

  
  /* The Cities */
  const city = City.getAllCities(); 
  const filteredCity = city.filter((city) =>
  `${city.name} ${city.countryCode}`.toLowerCase().includes(searchValue.toLowerCase())
  );
  

  /* Handlers */
  const searchHandler = (event: any) => {
    setSearchValue(event.target.value);
    if (event.target.value.length < 1) {
      setListVisibility("hidden");
    } else {
      setListVisibility("visible");
    }
  };

  const handleOutsideClick = (event: any) => {
    setListVisibility("hidden");
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const itemClickHandler = (city: {
    name: string;
    latitude: string;
    longitude: string;
  }) => {
    props.onValueChange({
      latitude: parseFloat(city.latitude),
      longitude: parseFloat(city.longitude),
    });
    setSearchValue(city.name);
    setListVisibility("hidden");
  };

  const inputKeyHandler = (event: any) => {
    if (event.key === "Enter") {
      setListVisibility("hidden");
    }
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto">
      <div className="flex justify-center py-2 px-3">
        <div className="w-full max-w-md relative">
          <div className="bg-white shadow-md rounded-lg px-3 py-2">
            <div className="flex items-center">
              <input
                className="w-full border-none rounded-md text-gray-700 leading-tight focus:ring-0 text-sm md:text-base py-1 px-2"
                id="search"
                type="text"
                placeholder="Search cities..."
                onChange={searchHandler}
                onKeyDown={inputKeyHandler}
                value={searchValue}
                autoFocus={true}
              />
              <div className="pl-2">
                <svg
                  className="fill-current text-gray-500 w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="heroicon-ui"
                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                  />
                </svg>
              </div>
            </div>
          </div>
          {/* List of Cities */}
          <div
            className={`mt-2 py-3 w-full text-sm absolute z-20 rounded-lg bg-white shadow-lg ${listVisibility}`}
          >
            {searchValue.length > 0
              ? filteredCity
                  .map((city) => (
                    <CityList
                      key={
                        city.name +
                        "-" +
                        city.stateCode +
                        "-" +
                        city.countryCode
                      }
                      onItemClick={itemClickHandler}
                      listVisibility={listVisibility}
                      cityName={city.name}
                      cityCountryCode={city.countryCode}
                      lat={city.latitude}
                      long={city.longitude}
                    />
                  ))
                  .slice(0, 5)
              : ""}
            {filteredCity.length < 1 ? (
              <p className="font-semibold text-xs md:text-base mx-3">
                No cities found
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
