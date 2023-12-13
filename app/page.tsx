"use client";
import LocationButton from "@/components/UI/LocationButton";
import Date from "@/components/Date";
import Time from "@/components/Time";
import TodaysWeather from "@/components/TodaysWeather";
import FourDayForecast from "@/components/FourDayForecast";
import Modal from "@/components/UI/Modal";
import Link from "next/link";
import CityNotFound from "@/components/Error/CityNotFound";
import ConditionDetails from "@/components/UI/ConditionDetails";

import { useEffect } from "react";
import { useState } from "react";
import { useCityContext } from "@/context/CityContext";
import { Loading } from "@/components/UI/Loading";
import { ICurrentWeatherData, IForecastWeatherData } from "@/interfaces";
import { getOpenWeatherData } from "./api/getOpenWeatherData";
import { RefreshButton } from "@/components/UI/RefreshButton";

export default function Home() {
  /* 
  Get the current weather and forecasts in here.
  So all the properties can be 
  passed down to child components.
  */
  let { latitude, longitude } = useCityContext();

  const [currentWeatherData, setCurrentWeatherData] =
    useState<ICurrentWeatherData>();
  const [forecasts, setForecasts] = useState<IForecastWeatherData[]>();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const weatherData = await getOpenWeatherData(
        latitude.toString(),
        longitude.toString()
      );
      const currentWeather: ICurrentWeatherData =
        weatherData?.currentWeatherData!;
      const forecasts: IForecastWeatherData[] = weatherData?.fiveDayForecasts!;
      setCurrentWeatherData(currentWeather);
      setForecasts(forecasts);
      setLoading(false);
    } catch (error) {
      setError(error as any);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [latitude, longitude]);

  if (loading) return <Loading />;
  if (error || currentWeatherData == undefined)
    return <CityNotFound error={error} />;
  if (currentWeatherData)
    return (
      <div className="grid grid-cols-1 pt-5 pb-5 2xl:pb-10 content-between h-screen">
        {/* upper layout */}
        <div>
          <div className="flex justify-end gap-5">
            <RefreshButton promiseAction={fetchData} />
            <LocationButton />
          </div>
          <Modal />
          <div className="my-2"></div>
          <div className="flex justify-between">
            <Date datetime={currentWeatherData.datetime} />
            <Time time={currentWeatherData.datetime.time} />
          </div>
        </div>
        {/* middle layout */}
        <div>
          <TodaysWeather currentWeather={currentWeatherData} />
        </div>
        {/* bottom layout */}
        <div>
          <ConditionDetails currentWeather={currentWeatherData} />
          <div className="my-5"></div>
          <div className="border-t-2" style={{ borderColor: "#30373E" }}></div>
          <FourDayForecast forecasts={forecasts?.splice(0, 4)} />
          <Link
            href={{
              pathname: "/forecast",
            }}
            className="text-[#30373E] hover:text-[#637280] transition-all mt-5 flex justify-center underline underline-offset-1"
          >
            view all
          </Link>
        </div>
      </div>
    );
}
