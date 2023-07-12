"use client";
import ButtonLocation from "@/components/UI/ButtonLocation";
import Date from "@/components/Date";
import Time from "@/components/Time";
import TodaysWeather from "@/components/TodaysWeather";
import FourDayForecast from "@/components/FourDayForecast";
import Modal from "@/components/UI/Modal";
import Link from "next/link";
import CityNotFound from "@/components/Error/CityNotFound";
import ConditionDetails from "@/components/UI/ConditionDetails";

import { getCurrentWeatherSWR } from "./api/getCurrentWeatherSWR";
import { useCityContext } from "@/context/CityContext";

export default function Home() {
  const { latitude, longitude } =
    useCityContext();
  /* 
  Get the current weather in here.
  So all the properties can be 
  passed down to child components.
  */
  const currentWeather = getCurrentWeatherSWR(`${latitude},${longitude}`);

  if (currentWeather.error) return <CityNotFound />;

  return (
    <>
      <ButtonLocation />
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
      <FourDayForecast forecast={currentWeather.forecast} />
      <Link
        href={{
          pathname: "/forecast",
        }}
        className="text-[#30373E] hover:text-[#637280] transition-all my-10 flex mx-auto underline underline-offset-1"
      >
        view all
      </Link>
    </>
  );
}
