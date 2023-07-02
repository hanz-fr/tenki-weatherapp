import React from "react";

import DayForecast from "./UI/DayForecast";

export default function FourDaysForecast() {
  return (
    <div className="flex justify-between lg:justify-evenly mt-10">
      <DayForecast day={"Fri"} date={"26/05"} weather={"Sunny"}/>
      <DayForecast day={"Sat"} date={"27/05"} weather={"Cloudy"}/>
      <DayForecast day={"Sun"} date={"28/05"} weather={"Thunder"}/>
      <DayForecast day={"Mon"} date={"29/05"} weather={"Sunny"}/>
    </div>
  );
}
