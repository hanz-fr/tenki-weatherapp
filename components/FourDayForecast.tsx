import React from "react";

import DayForecast from "./UI/DayForecast";

interface ForecastProps {
  date: string,
  day: {
    condition: {
      text: string
    }
  }
}

const weekday = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
];

export default function FourDaysForecast(props: { forecast: ForecastProps[]}) {
  return (
    <div className="flex justify-between lg:justify-evenly mt-10">
      {props.forecast?.map((forecast) => (
        <DayForecast date={forecast.date}  day={weekday[new Date(forecast.date).getDay()]} weather={forecast.day.condition.text}/>
      )).slice(1)}
    </div>
  );
}
