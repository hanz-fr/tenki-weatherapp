"use client";
import useSWR from "swr";

import { getCityDateTimeSWR } from "./getCityDateTimeSWR";

export function getCurrentWeatherSWR(city: string) {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading, isValidating } = useSWR(`http://api.weatherapi.com/v1/current.json?key=c9e6cb3718574d2293d42758230207&q=${city}`, fetcher, { refreshInterval: 600000 });

  /* Current City Details */
  const name = data?.location.name;
  const country = data?.location.country;
  const latitude = data?.location.lat;
  const longitude = data?.location.lon;

  /* Current Weather Details */
  const temp_f = data?.current.temp_f;
  const temp_c = data?.current.temp_c;
  const condition = data?.current.condition.text;

  const cityDateTime = getCityDateTimeSWR(latitude, longitude);

  /* Bake them all into one object! */
  const currentCityWeather = {
    name,
    country,
    latitude,
    longitude,
    temp_f,
    temp_c,
    condition,
    isLoading,
    isValidating,
    error,
    dateTime: {
        time: cityDateTime.time,
        date: cityDateTime.date,
        isLoading: cityDateTime.isLoading,
        isValidating: cityDateTime.isValidating,
        error: cityDateTime.error,
    }
  }

  return currentCityWeather;

}
