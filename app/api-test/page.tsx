import FourDayForecast from "@/components/FourDayForecast";
import { getOpenWeatherData } from "../api/getOpenWeatherData";

export default async function page() {

  const forecasts = await getOpenWeatherData(44.34, 10.99)

  return (
    <>
      <div className="flex">
        <FourDayForecast forecasts={forecasts} />
      </div>
    </>
  );
}
