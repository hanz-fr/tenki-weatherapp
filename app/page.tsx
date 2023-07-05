import ButtonSettings from "@/components/UI/ButtonSettings";
import Date from "@/components/Date";
import Time from "@/components/Time";
import TodaysWeather from "@/components/TodaysWeather";
import FourDayForecast from "@/components/FourDayForecast";
import Modal from "@/components/UI/Modal";
import Link from "next/link";

import getCurrentWeather from "@/app/api/getCurrentWeather";

export default async function Home() {

  /* 
  Get the current weather in here.
  So all the properties can be 
  passed down to child components.
  */
  const currentWeather = await getCurrentWeather();  

  return (
    <>
      <ButtonSettings />
      <Link href="/api-test">API Testing Page</Link>
      <Modal />
      <div className="my-2"></div>
      <div className="flex justify-between">
        <Date />
        <Time time={currentWeather.time}/>
      </div>
      {/* @ts-expect-error Async Server Component */}
      <TodaysWeather currentWeather={currentWeather}/>
      <div className="my-16 lg:my-32"></div> {/* spacer */}
      <div className="border-t-2" style={{ borderColor: "#30373E" }}></div>
      <FourDayForecast />
    </>
  );
}
