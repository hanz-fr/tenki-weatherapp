import ButtonSettings from "@/components/UI/ButtonSettings";
import Date from "@/components/Date";
import Time from "@/components/Time";
import TodaysWeather from "@/components/TodaysWeather";
import FourDaysForecast from "@/components/FourDaysForecast";

export default function Home() {
  return (
    <>
      <ButtonSettings />
      <div className="my-2"></div>
      <div className="flex justify-between">
        <Date />
        <Time />
      </div>
      <TodaysWeather />
      <div className="my-20"></div>
      <div className="border-t-2" style={{ borderColor: "#30373E" }}></div>
      <FourDaysForecast />
    </>
  );
}
