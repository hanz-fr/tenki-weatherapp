"use client";
import useSWR, { preload } from "swr";
import axios from "axios";

import { getCityDateTimeSWR } from "./getCityDateTimeSWR";

const fetcher = (url: string) => axios.get(url).then((res: { data: any; }) => res.data);

export function getCurrentWeatherSWR(city: string) {

  const { data, error, isLoading, isValidating } = useSWR(
    `https://api.weatherapi.com/v1/forecast.json?key=c9e6cb3718574d2293d42758230207&q=${city=="0,0"?"Tokyo":city}&days=5&aqi=no&alerts=no`,
    fetcher,
    { refreshInterval: 600000 }
  );

  /* Current City Details */
  const name = data?.location.name;
  const country = data?.location.country;
  const latitude = data?.location.lat;
  const longitude = data?.location.lon;

  /* Current Weather Details */
  const temp_f = data?.current.temp_f;
  const temp_c = data?.current.temp_c;
  const condition = data?.current.condition.text;
  const condition_icon = data?.current.condition.icon;
  const condition_code = data?.current.condition.code;
  const is_day = data?.current.is_day;

  /* Condition Details */
  const pressure_mb = data?.current.pressure_mb;
  const humidity = data?.current.humidity;
  const wind_kph = data?.current.wind_kph;
  const wind_dir = data?.current.wind_dir;

  /* Forecast */
  const forecast = data?.forecast.forecastday;

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
    condition_icon,
    condition_code,
    is_day,
    isLoading,
    isValidating,
    error,
    dateTime: {
      time: cityDateTime.time,
      date: cityDateTime.date,
      isLoading: cityDateTime.isLoading,
      isValidating: cityDateTime.isValidating,
      error: cityDateTime.error,
    },
    conditionDetails: {
      pressure_mb,
      humidity,
      wind_kph,
      wind_dir,
    },
    forecast,
  };

  return currentCityWeather;
}
