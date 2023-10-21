import FourDayForecast from "@/components/FourDayForecast";
import TodaysWeather from "@/components/TodaysWeather";
import { getOpenWeatherData } from "../api/getOpenWeatherData";
import { getOpenWeatherDataSWR } from "../api/getOpenWeatherDataSWR";

export default function page() {

  const res = getOpenWeatherDataSWR('-6.87222', '107.5425');
  console.log(res);

  return (
    <>
    </>
  );
}
