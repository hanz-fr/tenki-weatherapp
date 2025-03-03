'use client';
import React, { ReactNode, useState } from "react";
import { CityContext } from "./CityContext";

interface IProps {
  children: ReactNode;
}

const CityContextProvider = ({ children }: IProps) => {

  const [cityLat, setCityLat] = useState(0);
  const [cityLon, setCityLon] = useState(0);

  const setCityLatitude = (lat: number) => {
    setCityLat(lat);
  };

  const setCityLongitude = (lon: number) => {
    setCityLon(lon);
  };

  return (
    <CityContext.Provider
      value={{
        latitude: cityLat.toString(),
        longitude: cityLon.toString(),
        setCityLatitude,
        setCityLongitude,
      }}
    >
      {children}
    </CityContext.Provider>
  );
};

export default CityContextProvider;
