'use client';
import React, { ReactNode, useEffect, useState } from "react";
import { CityContext } from "./CityContext";

interface IProps {
  children: ReactNode;
}

const CityContextProvider = ({ children }: IProps) => {
  useEffect(() => {
    import('preline' as any)
  }, [])

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
        latitude: cityLat,
        longitude: cityLon,
        setCityLatitude,
        setCityLongitude,
      }}
    >
      {children}
    </CityContext.Provider>
  );
};

export default CityContextProvider;
