"use client";
import React from "react";

import Image from "next/image";
import Link from "next/link";
import DayForecastCard from "@/components/UI/DayForecastCard";

import { useCityContext } from "@/context/CityContext";

interface ForecastProps {
  date: string;
  day: {
    avgtemp_c: number;
    condition: {
      text: string;
      code: number;
    };
  };
}

export default async function ForecastPage() {
  const { latitude, longitude } = useCityContext();

  const res = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=c9e6cb3718574d2293d42758230207&q=${latitude},${longitude}&days=11&aqi=no&alerts=no`,
    { cache: "no-store" }
  );

  const weatherData = await res.json();
  const { forecastday } = weatherData?.forecast;

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
          {forecastday
            .map((forecast: ForecastProps) => (
              <DayForecastCard
                temp={forecast?.day.avgtemp_c}
                date={forecast?.date}
                condition={forecast?.day.condition.text}
                code={forecast?.day.condition.code}
              />
            ))
            .slice(1)}
          <div className="my-10"></div>
        </div>
      </div>
    </div>
  );
}
