import { FbModal } from "../UI/FbModal";
import LocationButton from "../UI/LocationButton";
import Image from "next/image";

export default function CityNotFound(props: { error: any }) {

  return (
    <div className="grid grid-cols-1 content-between h-[100vh]">
      {/* Upper Layout */}
      <div className="mt-5 flex justify-end">
        <FbModal />
      </div>
      {/* Middle Layout */}
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
      {/* Bottom Layout */}
      <div className="mb-10">
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
      </div>
    </div>
  );
}
