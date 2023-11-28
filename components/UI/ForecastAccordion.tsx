'use client';
import React from "react";

import Image from "next/image";
import { IForecastWeatherData } from "@/interfaces";
import { monthConverter } from "@/lib/utils/monthConverter";
import { windDir } from "@/lib/utils/windDir";

function ForecastAccordion(props: IForecastWeatherData) {
  return (
    <div className="hs-accordion-group border-t-[0.6px] border-[#30373E] py-8">
      <div
        className="hs-accordion active"
        id={`hs-basic-with-title-and-arrow-stretched-heading`}
      >
        <button
          className="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex items-center justify-between w-full text-start text-[#30373E] rounded-lg disabled:opacity-50 disabled:pointer-events-none"
          aria-controls={`hs-basic-with-title-and-arrow-stretched-collapse`}
        >
          <div className="flex flex-row xl:px-5 gap-5 md:gap-10">
            <div className="basis-1/3 md:basis-1/4 xl:basis-1/6 flex flex-col gap-2">
              <Image
                src={`/assets/svg/openweather/${props?.icon}.svg`}
                width={30}
                height={30}
                alt="weather"
                className="mx-auto"
              />
              <div className="text-[#30373E] font-bold mx-auto text-sm md:text-lg">
                {props?.temp?.toFixed(1)}°C
              </div>
            </div>
            <div className="basis-2/3 md:basis-3/4 xl:basis-5/6 flex flex-col my-auto">
              <div className="text-[#30373E] text-md">
                {props?.condition}
              </div>
              <div className="text-[#30373E] text-xs md:text-base whitespace-nowrap font-bold">
                {props?.day}, {props?.date} {monthConverter(props?.month)}{" "}
                {props?.year}
              </div>
            </div>
          </div>
          <svg
            className="hs-accordion-active:hidden block w-4 h-4 md:w-6 md:h-6 mr-3"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
          <svg
            className="hs-accordion-active:block hidden w-4 h-4 md:w-6 md:h-6 mr-3"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
        </button>
        <div
          id={`hs-basic-with-title-and-arrow-stretched-collapse`}
          className="hs-accordion-content md:mx-2 my-2 w-full overflow-hidden transition-[height] duration-300"
          aria-labelledby={`hs-basic-with-title-and-arrow-stretched-heading`}
        >
          <table className="w-full border-separate mt-3 border-spacing-2 text-[#30373E] text-sm md:text-base">
            <tr>
              <td className="pr-3 whitespace-nowrap">Feels like</td>
              <td>:</td>
              <td className="w-full text-end font-bold">{props?.feels_like?.toFixed(1)}°C</td>
            </tr>
            <tr>
              <td className="pr-3 whitespace-nowrap">Temp. Min</td>
              <td>:</td>
              <td className="w-full text-end font-bold">{props?.temp_min?.toFixed(1)}°C</td>
            </tr>
            <tr>
              <td className="pr-3 whitespace-nowrap">Temp. Max</td>
              <td>:</td>
              <td className="w-full text-end font-bold">{props?.temp_max?.toFixed(1)}°C</td>
            </tr>
            <tr>
              <td className="pr-3 whitespace-nowrap">Humidity</td>
              <td>:</td>
              <td className="w-full text-end font-bold">{props?.humidity}%</td>
            </tr>
            <tr>
              <td className="pr-3 whitespace-nowrap">Pressure</td>
              <td>:</td>
              <td className="w-full text-end font-bold">{props?.pressure}mb</td>
            </tr>
            <tr>
              <td className="pr-3 whitespace-nowrap">Wind</td>
              <td>:</td>
              <td className="w-full flex justify-end font-bold">
                <p className="mr-2">{props?.wind_speed} m/s</p>
                <p>{windDir(props?.wind_deg)}</p>
                <svg
                  className="ml-1 my-auto"
                  width="13"
                  height="14"
                  viewBox="0 0 13 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.8806 12.2521L7.56369 0.6951C7.13759 -0.2317 5.86288 -0.2317 5.43605 0.6951L0.119128 12.2521C-0.362588 13.2986 0.707008 14.385 1.70944 13.8663L5.97266 11.6599C6.30415 11.4884 6.69487 11.4884 7.02564 11.6599L11.2903 13.8663C12.2927 14.3843 13.3631 13.2993 12.8806 12.2521Z"
                    fill="#30373E"
                  />
                </svg>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ForecastAccordion;
