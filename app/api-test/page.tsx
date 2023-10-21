import FourDayForecast from "@/components/FourDayForecast";
import TodaysWeather from "@/components/TodaysWeather";
import { getOpenWeatherData } from "../api/getOpenWeatherData";

export default async function page() {

  const res = await getOpenWeatherData('44.34', '10.99');
  const currentWeather = res?.currentWeatherData;
  const forecasts = res?.fiveDayForecasts;

  return (
    <>
      <div className="flex">
        <TodaysWeather currentWeather={currentWeather} />
        <FourDayForecast forecasts={forecasts}/>
      </div>
    </>
  );
}
