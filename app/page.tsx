import ButtonSettings from "@/components/UI/ButtonSettings";
import Date from "@/components/Date";
import Time from "@/components/Time";
import TodaysWeather from "@/components/TodaysWeather";
import FourDayForecast from "@/components/FourDayForecast";
import Modal from "@/components/UI/Modal";

export default function Home() {
  return (
    <>
      <ButtonSettings />
      <Modal />
      <div className="my-2"></div>
      <div className="flex justify-between">
        <Date />
        <Time />
      </div>
      <TodaysWeather />
      <div className="my-16 lg:my-32"></div> {/* spacer */}
      <div className="border-t-2" style={{ borderColor: "#30373E" }}></div>
      <FourDayForecast />
    </>
  );
}
