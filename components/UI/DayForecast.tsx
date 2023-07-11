import React from "react";
import Image from "next/image";

const DayForecast: React.FC<{ day: string; date: string; code: number }> = (
  props
) => {

  const date = ("0" + new Date(props.date).getDate()).slice(-2);
  const month = ("0" + (new Date(props.date).getMonth() + 1)).slice(-2);

  return (
    <div className="grid grid-cols-1 gap-3 content-between">
      <Image
        className="mx-auto"
        src={`/assets/svg/weather/day_${props.code}.svg`}
        alt="weather_sunny"
        width={34}
        height={34}
      />
      <div className="mx-auto text-center">
        <div className="text-lg font-medium" style={{ color: "#30373E" }}>
          {props.day}
        </div>

        <div className="mx-auto text-sm">{date}/{month}</div>
      </div>
    </div>
  );
};

export default DayForecast;
