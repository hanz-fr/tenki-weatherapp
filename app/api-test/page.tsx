"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";
import { getOpenWeatherData } from "../api/getOpenWeatherData";
import { IForecastWeatherData } from "@/interfaces";
import { ICurrentWeatherData } from "@/interfaces";
import { monthConverter } from "@/lib/utils/monthConverter";
import { ForecastAccordion } from "@/components/UI/ForecastAccordion";
import DayForecastCard from "@/components/UI/DayForecastCard";

export default function page() {
  const [data, setData] = useState<ICurrentWeatherData>();
  const [forecasts, setForecasts] = useState<IForecastWeatherData[]>();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const weatherData = await getOpenWeatherData("24.4511", "54.3969");

        const currentWeather: ICurrentWeatherData =
          weatherData?.currentWeatherData!;
        const forecasts: IForecastWeatherData[] =
          weatherData?.fiveDayForecasts!;
        setForecasts(forecasts);
        setData(currentWeather);
        setLoading(false);
      } catch (error) {
        setError(error as any);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (data) {
    return (
      <>
        <h1>Weather Data</h1>
        <div>{monthConverter(forecasts![0].month)}</div>
        {JSON.stringify(forecasts)}
        {forecasts?.map((forecast: IForecastWeatherData, index) => (
          <ForecastAccordion
            index={index + 1}
            id={forecast.id}
            condition={forecast.condition}
            temp={forecast.temp}
            feels_like={forecast.feels_like}
            temp_min={forecast.temp_min}
            temp_max={forecast.temp_max}
            humidity={forecast.humidity}
            pressure={forecast.pressure}
            wind_speed={forecast.wind_speed}
            wind_deg={forecast.wind_deg}
            icon={forecast.icon}
            date={forecast.date}
            day={forecast.day}
            month={forecast.month}
            year={forecast.year}
            time={forecast.time}
          />
        ))}
      </>
    );
  }
}
