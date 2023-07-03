"use client";

import React from "react";

import { Country, State, City } from "country-state-city";

export default function Button() {
  const showCity = () => {
    const city = City.getAllCities().filter(function (el) {
      return (el.name == "Jakarta");
    });

    console.log(city);
  };

  return (
    <button type="button" onClick={showCity}>
      SHOW CITIES!
    </button>
  );
}
