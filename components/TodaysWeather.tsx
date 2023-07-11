import Image from "next/image";
import React from "react";

interface CurrentWeatherProps {
  name: string;
  country: string;
  latitude: number;
  longitude: number;
  temp_f: number;
  temp_c: number;
  condition: string;
  condition_icon: string;
  time: string;
  isLoading: boolean;
  isValidating: boolean;
  error: any;
}

export default async function TodaysWeather(props: {
  currentWeather: CurrentWeatherProps;
}) {
  /* Get current weather */
  const currentWeather = props?.currentWeather;

  if (currentWeather?.isLoading)
    return (
      <div className="flex justify-center mt-20">
        <div className="flex flex-col">
          <div className="bg-[#C8C8C8] rounded-xl animate-pulse" style={{ width: 140, height: 112 }}></div>
          <div className="my-1"></div>
          <div className="bg-[#C8C8C8] rounded-lg animate-pulse w-20 h-8"></div>
          <div className="bg-[#C8C8C8] rounded-lg animate-pulse w-10 h-4 my-2"></div>
          <div className="flex gap-1">
            <div className="bg-[#C8C8C8] rounded-lg animate-pulse w-16 h-4"></div>
            <div className="bg-[#C8C8C8] rounded-lg animate-pulse w-16 h-4"></div>
          </div>
        </div>
      </div>
    );

  return (
    <div className="flex justify-center mt-20">
      <div className="flex flex-col">
        <Image src={'assets/svg/weather/day_1282.svg'} height={100} width={100} alt={"icon"} className={"mx-auto"}/>

        <div className="my-2"></div>

        <div className="text-2xl lg:text-5xl font-bold text-center" style={{ color: "#30373E" }}>
          {currentWeather?.temp_c}°C
        </div>

        <div className="text-lg w-full lg:text-2xl lg:mt-2 text-center font-semibold" style={{ color: "#30373E" }}>
          {currentWeather?.condition}
        </div>

        <div className="text-lg w-full lg:w-full text-center" style={{ color: "#30373E" }}>
          {currentWeather?.name}, {currentWeather?.country}
        </div>
      </div>
    </div>
  );
}
