"use client";
import ButtonSettings from "@/components/UI/ButtonSettings";
import Date from "@/components/Date";
import Time from "@/components/Time";
import TodaysWeather from "@/components/TodaysWeather";
import FourDayForecast from "@/components/FourDayForecast";
import Modal from "@/components/UI/Modal";
import Link from "next/link";

import { getCurrentWeatherSWR } from "./api/getCurrentWeatherSWR";

export default async function Home() {

  /* 
  Get the current weather in here.
  So all the properties can be 
  passed down to child components.
  */
  const currentWeather = getCurrentWeatherSWR("Melbourne");  

  return (
    <>
      <ButtonSettings />
      <Link href="/api-test">API Testing Page</Link>
      <Modal />
      <div className="my-2"></div>
      <div className="flex justify-between">
        <Date dateTime={currentWeather.dateTime}/>
        <Time dateTime={currentWeather.dateTime}/>
      </div>
      {/* @ts-expect-error Async Server Component */}
      <TodaysWeather currentWeather={currentWeather}/>
      <div className="my-16 lg:my-32"></div> {/* spacer */}
      <div className="border-t-2" style={{ borderColor: "#30373E" }}></div>
      <FourDayForecast />
    </>
  );
}
