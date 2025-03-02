"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import FbForecastAccordion from "@/components/UI/FbForecastAccordion";

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
          {forecasts?.map((forecast: IForecastWeatherData, index) => (
            <FbForecastAccordion
              key={index + 1}
              temp={forecast?.temp}
              date={forecast?.date}
              day={forecast?.day}
              month={forecast?.month}
              year={forecast?.year}
              time={forecast?.time}
              condition={forecast?.condition}
              id={forecast?.id}
              icon={forecast?.icon}
              feels_like={forecast?.feels_like}
              temp_min={forecast?.temp_min}
              temp_max={forecast?.temp_max}
              humidity={forecast?.humidity}
              pressure={forecast?.pressure}
              wind_speed={forecast?.wind_speed}
              wind_deg={forecast?.wind_deg}
              index={index + 1}
            />
          ))}
          <div className="my-10"></div>
        </div>
      </div>
    </div>
  );
}
