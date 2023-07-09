"use client";
import ButtonSettings from "@/components/UI/ButtonSettings";
import Date from "@/components/Date";
import Time from "@/components/Time";
import TodaysWeather from "@/components/TodaysWeather";
import FourDayForecast from "@/components/FourDayForecast";
import Modal from "@/components/UI/Modal";
import Link from "next/link";
import CityNotFound from "@/components/Error/CityNotFound";
import ConditionDetails from "@/components/UI/ConditionDetails";

import { getCurrentWeatherSWR } from "./api/getCurrentWeatherSWR";

export default function Home() {
  /* 
  Get the current weather in here.
  So all the properties can be 
  passed down to child components.
  */
  const currentWeather = getCurrentWeatherSWR("Tokyo");

  if (currentWeather.error) return <CityNotFound />;

  return (
    <>
      <ButtonSettings />
      <Link href="/api-test">API Testing Page</Link>
      <Modal />
      <div className="my-2"></div>
      <div className="flex justify-between">
        <Date dateTime={currentWeather.dateTime} />
        <Time dateTime={currentWeather.dateTime} />
      </div>
      {/* @ts-expect-error Async Server Component */}
      <TodaysWeather currentWeather={currentWeather} />
      <div className="my-8 lg:my-20"></div> {/* spacer */}
      <ConditionDetails details={currentWeather.conditionDetails} />
      <div className="my-2 lg:my-5"></div> {/* spacer */}
      <div className="border-t-2" style={{ borderColor: "#30373E" }}></div>
      <FourDayForecast />
    </>
  );
}
