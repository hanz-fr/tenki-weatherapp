"use client";

import { Accordion } from "flowbite-react";
import { IForecastWeatherData } from "@/interfaces";
import Image from "next/image";
import { monthConverter } from "@/lib/utils/monthConverter";

export default function FbForecastAccordion(props: IForecastWeatherData) {
  return (
    <Accordion>
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
              <span>{props?.condition}</span>
              <span className="text-sm">
                {props?.day}, {props?.date} {monthConverter(props?.month)} {props.year}
              </span>
            </div>
          </div>
        </Accordion.Title>
        <Accordion.Content>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            reiciendis!
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
