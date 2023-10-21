import { capitalizeWord } from "@/lib/utils/capitalizeWord";
import { countryCodeToName } from "@/lib/utils/countryCodeToName";
import { dtGetDay } from "@/lib/utils/dtGetDay";
import { dtGetHour2Digit } from "@/lib/utils/dtGetHour";
import { dtGetMinute } from "@/lib/utils/dtGetMinute";
import { dtGetMonth } from "@/lib/utils/dtGetMonth";
import { getCurrentDate } from "@/lib/utils/getCurrentDate";
import { unixTimeConverter } from "@/lib/utils/unixTimeConverter";
import axios from "axios";
import useSWR from "swr";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const API_KEY = process.env.OPEN_WEATHER_KEY;

type weatherProps = {
  id: number;
  condition: string;
  icon: string;
  date: string;
  day: string;
  month: number;
  time: string;
};

export function getOpenWeatherDataSWR(lat: string, lon: string) {

  const { data, error } = useSWR(
    `https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${lat}&lon=${lon}&appid=${API_KEY}`,
    fetcher
  );

  return data;
}
