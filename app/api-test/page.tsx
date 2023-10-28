"use client";
import { useEffect } from "react";
import { useState } from "react";
import { getOpenWeatherData } from "../api/getOpenWeatherData";
import { IForecastWeatherData } from "@/interfaces";
import { ICurrentWeatherData } from "@/interfaces";
import { monthConverter } from "@/lib/utils/monthConverter";

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
      </>
    );
  }
}
