import React from "react";

import Image from "next/image";
import { windDir } from "@/lib/utils/windDir";
import { mpsToKph } from "@/lib/utils/mpsToKph";

interface CurrentWeatherProps {
  weather: {
    id: number;
    icon: string;
    description: string;
  };
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  country: string;
  city: string;
}

export default function ConditionDetails(props: {
  currentWeather: CurrentWeatherProps | any;
}) {
  return (
    <div className="flex justify-between md:justify-evenly">
      {/* Wind */}
      <div className="flex flex-col my-auto">
        <div className="flex gap-2">
          <Image
            src={"/assets/svg/wind.svg"}
            width={35}
            height={35}
            alt={"wind"}
          ></Image>
          <div className="flex flex-col">
            <div className="mx-auto font-bold text-[#30373E] text-sm">
              {windDir(props?.currentWeather?.wind?.deg)}
            </div>
            <Image
              className="mx-auto"
              src={"/assets/svg/arrow.svg"}
              width={15}
              height={15}
              alt={"wind"}
            ></Image>
          </div>
        </div>
        <div className="text-center text-[#30373E] font-normal mt-2">
          {mpsToKph(props?.currentWeather?.wind?.speed.toFixed(0))} kph  
        </div>
      </div>

      {/* Humidity */}
      <div className="flex flex-col my-auto">
        <div className="flex gap-2">
          <Image
            src={"/assets/svg/humid.svg"}
            width={15}
            height={15}
            alt={"humidity"}
          ></Image>
          <div className="text-lg text-[#30373E] font-bold my-auto">
            {props?.currentWeather?.main?.humidity}%
          </div>
        </div>
        <div className="text-center mt-4 text-base text-[#30373E]">
          humidity
        </div>
      </div>

      {/* Air Pressure */}
      <div className="flex flex-col my-auto">
        <div className="flex mt-[3.3px]">
          <Image
            src={"/assets/svg/pressure_arrow.svg"}
            alt={"air_pressure"}
            width={15}
            height={15}
          ></Image>
          <div className="text-lg text-[#30373E] font-bold my-auto">
            {props?.currentWeather?.main?.pressure}mb
          </div>
        </div>
        <div className="text-center mt-4 text-base text-[#30373E]">
          pressure
        </div>
      </div>
    </div>
  );
}
