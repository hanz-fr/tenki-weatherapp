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
  const { latitude, longitude } = useCityContext();
  /* 
  Get the current weather in here.
  So all the properties can be 
  passed down to child components.
  */
  const currentWeather = getCurrentWeatherSWR(`${latitude},${longitude}`);

  if (currentWeather.error) return <CityNotFound error={currentWeather.error} />;

  return (
    <div className="grid grid-cols-1 pt-5 pb-5 2xl:pb-10 content-between h-screen">
      {/* upper layout */}
      <div>
        <ButtonLocation />
        <Modal />
        <div className="my-2"></div>
        <div className="flex justify-between">
          <Date dateTime={currentWeather.dateTime} />
          <Time dateTime={currentWeather.dateTime} />
        </div>
      </div>
      {/* middle layout */}
      <div>
        {/* @ts-expect-error Async Server Component */}
        <TodaysWeather currentWeather={currentWeather} />
      </div>
      {/* bottom layout */}
      <div>
        <ConditionDetails details={currentWeather.conditionDetails} />
        <div className="my-5"></div>
        <div className="border-t-2" style={{ borderColor: "#30373E" }}></div>
        <FourDayForecast forecast={currentWeather.forecast} />
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
