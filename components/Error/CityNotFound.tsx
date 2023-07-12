import Link from "next/link";
import ButtonSettings from "../UI/ButtonLocation";
import Modal from "../UI/Modal";
import Date from "../Date";
import Time from "../Time";
import FourDaysForecast from "../FourDayForecast";
import FourDayForecast from "../FourDayForecast";
import Image from "next/image";

export default function CityNotFound() {
  return (
    <>
      <ButtonSettings />
      <Link href="/api-test">API Testing Page</Link>
      <Modal />
      <div className="my-20 xl:my-32"></div>
      <div className="flex justify-center">
        <div className="flex flex-col gap-3">
          <Image
            className="mx-auto"
            src="/assets/img/weather_not_found_light.png"
            alt="weather_not_found"
            width={150}
            height={150}
          />
          <div className="text-center font-normal text-lg lg:text-xl">
            Couldn't fetch weather data from current city.
          </div>
        </div>
      </div>
      <div className="my-16 lg:my-32"></div> {/* spacer */}
      <div className="border-t-2" style={{ borderColor: "#30373E" }}></div>
      <div className="flex justify-between lg:justify-evenly mt-10">
        {/* Item */}
        <div className="flex flex-col gap-3">
            <div className="w-10 h-10 bg-[#BCBCBC] rounded-lg"></div>
          <div className="mx-auto text-center">
            <div className="text-lg font-medium" style={{ color: "#30373E" }}>
              -
            </div>

            <div className="mx-auto text-sm">/</div>
          </div>
        </div>
        {/* Item */}
        <div className="flex flex-col gap-3">
            <div className="w-10 h-10 bg-[#BCBCBC] rounded-lg"></div>
          <div className="mx-auto text-center">
            <div className="text-lg font-medium" style={{ color: "#30373E" }}>
              -
            </div>

            <div className="mx-auto text-sm">/</div>
          </div>
        </div>
        {/* Item */}
        <div className="flex flex-col gap-3">
            <div className="w-10 h-10 bg-[#BCBCBC] rounded-lg"></div>
          <div className="mx-auto text-center">
            <div className="text-lg font-medium" style={{ color: "#30373E" }}>
              -
            </div>

            <div className="mx-auto text-sm">/</div>
          </div>
        </div>
        {/* Item */}
        <div className="flex flex-col gap-3">
            <div className="w-10 h-10 bg-[#BCBCBC] rounded-lg"></div>
          <div className="mx-auto text-center">
            <div className="text-lg font-medium" style={{ color: "#30373E" }}>
              -
            </div>

            <div className="mx-auto text-sm">/</div>
          </div>
        </div>
      </div>
    <div className="my-10 lg:my-14"></div> {/* spacer */}
    </>
  );
}
