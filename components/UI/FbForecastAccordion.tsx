"use client";

import { Accordion, CustomFlowbiteTheme } from "flowbite-react";
import { IForecastWeatherData } from "@/interfaces";
import Image from "next/image";
import { monthConverter } from "@/lib/utils/monthConverter";
import { windDir } from "@/lib/utils/windDir";

const customAccordionTheme: CustomFlowbiteTheme = {
  accordion: {
    root: {
      base: "divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700",
      flush: {
        off: "rounded-lg border",
        on: "border-b",
      },
    },
    content: {
      base: "p-5 first:rounded-t-lg last:rounded-b-lg dark:bg-gray-900",
    },
    title: {
      arrow: {
        base: "h-6 w-6 shrink-0",
        open: {
          off: "",
          on: "rotate-180",
        },
      },
      base: "flex w-full items-center justify-between p-5 text-left font-medium text-gray-500 first:rounded-t-lg last:rounded-b-lg dark:text-gray-400",
      flush: {
        off: "hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800",
        on: "bg-transparent dark:bg-transparent",
      },
      heading: "",
      open: {
        off: "",
        on: "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white",
      },
    },
  },
};

export default function FbForecastAccordion(props: IForecastWeatherData) {
  return (
    <Accordion className="bg-transparent border-none open:false">
      <Accordion.Panel>
        <Accordion.Title>
          <div className="flex justify-between gap-5">
            <div className="flex flex-col">
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
            <div className="flex flex-col">
              <span className="text-[#30373E] text-md">{props?.condition}</span>
              <span className="text-[#30373E] text-xs md:text-base whitespace-nowrap font-bold">
                {props?.day}, {props?.date} {monthConverter(props?.month)}{" "}
                {props?.year}
              </span>
            </div>
          </div>
        </Accordion.Title>
        <Accordion.Content>
          <table className="w-full border-separate mt-3 border-spacing-2 text-[#30373E] text-sm md:text-base">
            <tr>
              <td className="pr-3 whitespace-nowrap">Feels like</td>
              <td>:</td>
              <td className="w-full text-end font-bold">
                {props?.feels_like?.toFixed(1)}°C
              </td>
            </tr>
            <tr>
              <td className="pr-3 whitespace-nowrap">Temp. Min</td>
              <td>:</td>
              <td className="w-full text-end font-bold">
                {props?.temp_min?.toFixed(1)}°C
              </td>
            </tr>
            <tr>
              <td className="pr-3 whitespace-nowrap">Temp. Max</td>
              <td>:</td>
              <td className="w-full text-end font-bold">
                {props?.temp_max?.toFixed(1)}°C
              </td>
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
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
