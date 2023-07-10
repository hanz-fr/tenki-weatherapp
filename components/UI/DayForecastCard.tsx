import React from "react";

import Image from "next/image";

interface ForecastProps {
  temp: number;
  condition: string;
  date: string;
}

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function DayForecastCard(props: ForecastProps) {
  /* Format Date */
  const dateFormatted = new Date(props.date);
  const date = ("0" + dateFormatted.getDate()).slice(-2);
  const day = weekday[dateFormatted.getDay()];
  const month = months[dateFormatted.getMonth()];
  const year = dateFormatted.getFullYear();

  return (
    <>
      <div className="border-t-[0.6px] border-[#30373E] my-8"></div>
      <div className="flex justify-start gap-10 px-2">
        <div className="flex flex-col">
          <Image
            src="/assets/svg/weather_sunny.svg"
            width={30}
            height={30}
            alt="chevron"
            className="mx-auto"
          />
          <div className="text-[#30373E] font-bold">{props.temp}°C</div>
        </div>
        <div className="flex flex-col">
          <div className="text-[#30373E] text-md font-bold">{props.condition}</div>
          <div className="text-[#30373E] text-sm">{day}, {date} {month} {year}</div>
        </div>
      </div>
    </>
  );
}
