"use client";
import React from "react";

import Image from "next/image";
import Link from "next/link";
import DayForecastCard from "@/components/UI/DayForecastCard";

import { useCityContext } from "@/context/CityContext";
import { getOpenWeatherData } from "../api/getOpenWeatherData";
import { IForecastWeatherData } from "@/interfaces";


export default async function ForecastPage() {
  let { latitude, longitude } = useCityContext();

  const weatherData = await getOpenWeatherData(
    latitude.toString(),
    longitude.toString()
  );

  const forecasts: IForecastWeatherData[] = weatherData?.fiveDayForecasts!;

  return (
    <div>
      <div className="flex flex-col">
        <div className="flex justify-between my-5 xl:my-10">
          <Link href="/">
            <div className="p-3 rounded-lg hover:bg-gray-400 transition-all">
              <Image
                src={"/assets/svg/chevron_left.svg"}
                width={10}
                height={10}
                alt={"chevron"}
              />
            </div>
          </Link>
          <div className="text-[#30373E] font-semibold xl:text-xl my-auto">
            Forecasts
          </div>
          <div></div>
        </div>
        <div className="flex flex-col">
          {forecasts?.map((forecast: IForecastWeatherData) => (
            <DayForecastCard
              temp={forecast?.temp}
              date={forecast?.date}
              day={forecast?.day}
              month={forecast?.month}
              year={forecast?.year}
              time={forecast?.time}
              condition={forecast?.condition}
              id={forecast?.id}
              icon={forecast?.icon}
            />
          ))}
          <div className="my-10"></div>
        </div>
      </div>
    </div>
  );
}
