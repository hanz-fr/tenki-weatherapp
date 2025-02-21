import { useContext, createContext } from "react";

interface ICityContext {
  latitude: string;
  longitude: string;
  setCityLatitude: (lat: number) => void;
  setCityLongitude: (lon: number) => void;
}

export const CityContext = createContext<ICityContext>({
  latitude: '0',
  longitude: '0',
  setCityLatitude() {},
  setCityLongitude() {},
});

export const useCityContext = () => useContext(CityContext);
