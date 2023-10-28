"use client";
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
    `http://127.0.0.1:3000/api/openweather?search&lat=${lat}&lon=${lon}`,
    fetcher
  );

  return data;
}
