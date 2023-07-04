import React from "react";

import getCurrentWeather from "@/app/api/getCurrentWeather";
import getCityTime from "@/app/api/getCityTime";


export default async function TodaysWeather(props: { onWeatherUpdate: (time: string) => void }) {

  /* Get current weather */
  const currentWeather = await getCurrentWeather();

  /* Current City Details */
  const { 
    name,
    country,
    lat,
    lon
   } = currentWeather.location;
  
  /* Current Weather Details */
   const { 
    temp_f,
    temp_c,
  } = currentWeather.current; 
  const condition = currentWeather.current.condition.text;
  
  /* Get city time from given city latitude and longitude */
  const getCurrentCityTime = await getCityTime(lat, lon);
  const { formatted } = getCurrentCityTime;
  const options: Intl.DateTimeFormatOptions = {
    hour12: false,
    hour: "numeric",
    minute: "numeric",
  };
  const date = new Date(formatted);
  const time = date.toLocaleString([], options);
  props.onWeatherUpdate(time);
  console.log(Math.floor(Date.now() / 1000));

  return (
    <div className="flex justify-center mt-20">
      <div className="flex flex-col">
        <svg
          width="137"
          height="112"
          viewBox="0 0 137 112"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M71.5331 9.6C54.0099 9.6 39.9021 23.68 39.9021 40.9408C39.9021 43.8976 40.3162 46.7584 41.0809 49.4592C44.2478 50.3808 47.2172 51.7632 49.8935 53.5552C50.444 53.8901 50.9215 54.3333 51.2973 54.8581C51.6731 55.3829 51.9394 55.9786 52.0804 56.6093C52.2214 57.24 52.2341 57.8929 52.1177 58.5287C52.0013 59.1645 51.7583 59.7701 51.4031 60.3092C51.048 60.8483 50.5881 61.3099 50.051 61.6661C49.514 62.0223 48.9108 62.266 48.2776 62.3823C47.6445 62.4987 46.9945 62.4854 46.3667 62.3433C45.7388 62.2011 45.146 61.9331 44.6238 61.5552C40.9083 59.0826 36.5469 57.7708 32.0899 57.7856C19.5942 57.7856 9.55814 67.8336 9.55814 80.096C9.55814 92.3584 19.5942 102.4 32.0899 102.4H95.8108C113.334 102.4 127.442 88.32 127.442 71.0592C127.442 57.3824 118.585 45.7024 106.172 41.44C102.837 40.2943 99.3357 39.7105 95.8108 39.712C92.0959 39.712 88.5466 40.352 85.2459 41.504C84.0568 41.8939 82.7629 41.8001 81.6419 41.2426C80.5209 40.6851 79.6623 39.7084 79.2502 38.5222C78.8382 37.3359 78.9057 36.0347 79.4381 34.8979C79.9705 33.7611 80.9255 32.8792 82.098 32.4416C88.2782 30.2747 94.8808 29.6058 101.367 30.4896C99.1399 24.3468 95.0793 19.0441 89.7398 15.3054C84.4003 11.5667 78.042 9.57423 71.5331 9.6ZM112.028 33.4144C108.466 14.3616 91.6562 0 71.5331 0C48.8357 0 30.3439 18.2784 30.3439 40.9408C30.3439 43.4176 30.5669 45.8496 30.9939 48.2048C13.8274 48.7808 0 62.784 0 80.096C0 97.7664 14.42 112 32.0899 112H95.8108C118.502 112 137 93.7216 137 71.0592C137 54.1376 126.684 39.6672 112.028 33.4144Z"
            fill="#30373E"
          />
        </svg>

        <div className="my-2"></div>

        <div className="text-2xl font-semibold" style={{ color: "#30373E" }}>
          {temp_f}°F
        </div>

        <div className="text-lg" style={{ color: "#30373E" }}>
          {condition}
        </div>

        <div className="text-lg" style={{ color: "#30373E" }}>
          {name}, {country}
        </div>
      </div>
    </div>
  );
}
