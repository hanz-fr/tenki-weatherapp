import { dtGetDay } from "@/lib/utils/dtGetDay";
import { dtGetHour2Digit } from "@/lib/utils/dtGetHour";
import { dtGetMinute } from "@/lib/utils/dtGetMinute";
import { dtGetMonth } from "@/lib/utils/dtGetMonth";

type weatherProps = {
  id: number;
  condition: string;
  icon: string;
  date: string;
  day: string;
  month: number;
  time: string;
};

export async function getOpenWeatherData(lat: number, lon: number) {
  const API_KEY = process.env.OPEN_WEATHER_KEY;

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  );

  const json = await res.json();

  const list = await json.list;

  const forecasts = list?.map((e: any) => {
    return {
      id: e.weather[0].id,
      condition: e.weather[0].main,
      icon: e.weather[0].icon,
      date: new Date(e.dt_txt).getDate(),
      day: dtGetDay(e.dt_txt, true),
      month: dtGetMonth(e.dt_txt, true, false),
      time: `${dtGetHour2Digit(e.dt_txt)}:${dtGetMinute(e.dt_txt)}`,
    };
  });

  function fiveDaysForecastFilter(forecasts: any[]) {
    const uniqueDaysForecast: any[] = [];
    const seenDates = new Set();

    forecasts?.forEach((item) => {
      const dateKey = `${item.date} ${item.month}`;
      if (!seenDates.has(dateKey) && item.time == "09:00") {
        seenDates.add(dateKey);
        uniqueDaysForecast.push(item);
      }
    });

    return uniqueDaysForecast;
  }

  const fiveDayForecasts = fiveDaysForecastFilter(forecasts);

  return fiveDayForecasts;
}
