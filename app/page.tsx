import ButtonSettings from "@/components/UI/ButtonSettings";
import Date from "@/components/Date";
import Time from "@/components/Time";
import TodaysWeather from "@/components/TodaysWeather";
import FourDayForecast from "@/components/FourDayForecast";
import Modal from "@/components/UI/Modal";
import Link from "next/link";

import { useSelector } from 'react-redux';
import store from "../app/store";

export default function Home() {

  let cityTime:string="00:00";
  const getTime = (time:string) => {
    cityTime = time;
  }

  return (
    <>
      <ButtonSettings />
      <Link href="/api-test">API Testing Page</Link>
      <Modal />
      <div className="my-2"></div>
      <div className="flex justify-between">
        <Date />
        <Time time={cityTime}/>
      </div>
      {/* @ts-expect-error Async Server Component */}
      <TodaysWeather onWeatherUpdate={getTime}/>
      <div className="my-16 lg:my-32"></div> {/* spacer */}
      <div className="border-t-2" style={{ borderColor: "#30373E" }}></div>
      <FourDayForecast />
    </>
  );
}
