import React from 'react'

import Image from 'next/image';

interface ConditionDetailsProps {
    wind_kph: number,
    pressure_mb: number,
    humidity: number,
    wind_dir: string,
}

export default function ConditionDetails(props: {details: ConditionDetailsProps}) {
  return (
    <div className="flex justify-between">
        {/* Wind */}
        <div className="flex flex-col my-auto">
          <div className="flex gap-2">
            <Image
              src={"/assets/svg/wind.svg"}
              width={50}
              height={50}
              alt={"wind"}
            ></Image>
            <div className="flex flex-col">
              <div className="mx-auto font-bold text-[#30373E]">{props.details.wind_dir}</div>
              <Image
                src={"/assets/svg/arrow.svg"}
                width={20}
                height={20}
                alt={"wind"}
              ></Image>
            </div>
          </div>
          <div className="text-center text-[#30373E] font-normal mt-2">{props.details.wind_kph} kph</div>
        </div>

        {/* Humidity */}
        <div className="flex flex-col my-auto">
          <div className="flex gap-2">
            <Image src={"/assets/svg/humid.svg"} width={25} height={25} alt={"humidity"}></Image>
            <div className="text-lg text-[#30373E] font-bold my-auto">{props.details.humidity}</div>
          </div>
          <div className="text-center mt-4 text-base text-[#30373E]">humidity</div>
        </div>

        {/* Air Pressure */}
        <div className="flex flex-col my-auto">
          <div className="flex mt-[2px]">
            <Image src={"/assets/svg/pressure_arrow.svg"} alt={"air_pressure"} width={15} height={15}></Image>
            <div className="text-lg text-[#30373E] font-bold my-auto">
            {props.details.pressure_mb}mb
            </div>
          </div>
          <div className="text-center mt-4 text-base text-[#30373E]">pressure</div>
        </div>
      </div>
  )
}
