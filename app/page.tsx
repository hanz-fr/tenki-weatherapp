import ButtonLocation from "@/components/UI/ButtonLocation";
import Date from "@/components/Date";
import Time from "@/components/Time";
import TodaysWeather from "@/components/TodaysWeather";
import FourDayForecast from "@/components/FourDayForecast";
import Modal from "@/components/UI/Modal";
import Link from "next/link";
import ConditionDetails from "@/components/UI/ConditionDetails";

import { getOpenWeatherData } from "./api/getOpenWeatherData";

export default async function Home() {
  /* 
  Get the current weather and forecasts in here.
  So all the properties can be 
  passed down to child components.
  */

  const weatherData = await getOpenWeatherData('-6.87222', '107.5425');
  const currentWeather = weatherData?.currentWeatherData;
  const forecasts = weatherData?.fiveDayForecasts;

  return (
    <div className="grid grid-cols-1 pt-5 pb-5 2xl:pb-10 content-between h-screen">
      {/* upper layout */}
      <div>
        <ButtonLocation />
        <Modal />
        <div className="my-2"></div>
        <div className="flex justify-between">
          <Date datetime={currentWeather?.datetime} />
          <Time time={currentWeather?.datetime.time} />
        </div>
      </div>
      {/* middle layout */}
      <div>
        <TodaysWeather currentWeather={currentWeather} />
      </div>
      {/* bottom layout */}
      <div>
        <ConditionDetails currentWeather={currentWeather} />
        <div className="my-5"></div>
        <div className="border-t-2" style={{ borderColor: "#30373E" }}></div>
        <FourDayForecast forecasts={forecasts?.splice(0,4)} />
        <Link
          href={{
            pathname: "/forecast",
          }}
          className="text-[#30373E] hover:text-[#637280] transition-all mt-5 flex justify-center underline underline-offset-1"
        >
          view all
        </Link>
      </div>
    </div>
  );
}
