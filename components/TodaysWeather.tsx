import Image from "next/image";
import React from "react";

interface CurrentWeatherProps {
  weather: {
    id: number,
    icon: string,
    description: string,
  },
  main: {
    temp: number
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number,
  },
  wind: {
    speed: number,
    deg: number,
    gust: number,
  },
  country: string,
  city: string,
}

export default function TodaysWeather(props: {
  currentWeather: CurrentWeatherProps | any;
}) {
  /* Get current weather */
  const currentWeather = props?.currentWeather;

  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <Image src={`assets/svg/openweather/${currentWeather?.weather?.icon}.svg`} height={100} width={100} alt={"icon"} className={"mx-auto"}/>

        <div className="my-2"></div>

        <div className="text-2xl xl:text-5xl font-bold text-center" style={{ color: "#30373E" }}>
          {currentWeather?.main?.temp}°C
        </div>

        <div className="text-lg w-full xl:text-2xl lg:mt-2 text-center font-semibold" style={{ color: "#30373E" }}>
          {currentWeather?.weather?.description}
        </div>

        <div className="text-lg w-full lg:w-full text-center" style={{ color: "#30373E" }}>
          {currentWeather?.city}, {currentWeather?.country}
        </div>
      </div>
    </div>
  );
}
