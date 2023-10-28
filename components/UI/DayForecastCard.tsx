import React from "react";

import Image from "next/image";
import { IForecastWeatherData } from "@/interfaces";
import { monthConverter } from "@/lib/utils/monthConverter";

export default function DayForecastCard(props: IForecastWeatherData) {
  /* Format Date */
  /* const dateFormatted = new Date(props.date);
  const date = ("0" + dateFormatted.getDate()).slice(-2);
  const day = weekday[dateFormatted.getDay()];
  const month = months[dateFormatted.getMonth()];
  const year = dateFormatted.getFullYear(); */

  return (
    <>
      <div className="border-t-[0.6px] border-[#30373E] my-8"></div>
      <div className="flex flex-row xl:px-5">
        <div className="basis-1/3 md:basis-1/4 xl:basis-1/6 flex flex-col">
          <Image
            src={`/assets/svg/openweather/${props?.icon}.svg`}
            width={30}
            height={30}
            alt="weather"
            className="mx-auto"
          />
          <div className="text-[#30373E] font-bold mx-auto text-sm md:text-lg">
            {props.temp}°C
          </div>
        </div>
        <div className="basis-2/3 md:basis-3/4 xl:basis-5/6 flex flex-col my-auto">
          <div className="text-[#30373E] text-sm">
            {props.day}, {props.date} {monthConverter(props.month)}{" "}
            {props.year}
          </div>
          <div className="text-[#30373E] text-md font-bold">
            {props.condition}
          </div>
        </div>
      </div>
    </>
  );
}
