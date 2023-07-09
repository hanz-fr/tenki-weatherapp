import React from "react";
import Image from "next/image";

const DayForecast: React.FC<{ day: string; date: string; weather: string }> = (
  props
) => {
  return (
    <div className="flex flex-col gap-3">
      {props.weather == "Sunny" && (
        <Image
          className="mx-auto"
          src="/assets/svg/weather_sunny.svg"
          alt="weather_sunny"
          width={34}
          height={34}
        />
      )}
      {props.weather == "Rainy" && (
        <Image
          className="mx-auto"
          src="/assets/svg/weather_rain.svg"
          alt="weather_rain"
          width={34}
          height={34}
        />
      )}
      {props.weather == "Thunder" && (
        <Image
          className="mx-auto"
          src="/assets/svg/weather_thunder.svg"
          alt="weather_thunder"
          width={34}
          height={34}
        />
      )}
      {props.weather == "Cloudy" && (
        <Image
          className="mx-auto"
          src="/assets/svg/weather_cloudy.svg"
          alt="weather_cloudy"
          width={35}
          height={35}
        />
      )}
      {(props.weather != "Cloudy" ||
        "Thunder" ||
        "Rainy" ||
        "Sunny") && (
          <Image
            className="mx-auto"
            src="/assets/svg/weather_sunny.svg"
            alt="weather_sunny"
            width={34}
            height={34}
          />
        )}

      <div className="mx-auto text-center">
        <div className="text-lg font-medium" style={{ color: "#30373E" }}>
          {props.day}
        </div>

        <div className="mx-auto text-sm">{props.date}</div>
      </div>
    </div>
  );
};

export default DayForecast;
