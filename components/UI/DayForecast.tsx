import React from "react";
import Image from "next/image";

const DayForecast: React.FC<{
  day: string;
  date: string;
  month: string;
  code: string;
}> = (props) => {

  return (
    <div className="grid grid-cols-1 gap-3 content-between">
      <Image
        className="mx-auto"
        src={`/assets/svg/openweather/${props.code}.svg`}
        alt="weather_svg"
        width={34}
        height={34}
      />
      <div className="mx-auto text-center">
        <div className="text-lg font-medium" style={{ color: "#30373E" }}>
          {props.day.slice(0,3)}
        </div>

        <div className="mx-auto text-sm">
          {props.date}/{props.month}
        </div>
      </div>
    </div>
  );
};

export default DayForecast;
