import { dtGetMonth } from "@/lib/utils/dtGetMonth";
import { dtGetHour2Digit } from "@/lib/utils/dtGetHour";
import { dtGetMinute } from "@/lib/utils/dtGetMinute";
import { getOpenWeatherData } from "../api/getOpenWeatherData";

export default async function page() {
  const data = await getOpenWeatherData(35.6895, 139.69171);

  type weatherProps = {
    id: number;
    condition: string;
    icon: string;
    date: string;
    month: number;
    time: string;
  };

  const forecasts = data.map((e: any) => {
    return {
      id: e.weather[0].id,
      condition: e.weather[0].main,
      icon: e.weather[0].icon,
      date: new Date(e.dt_txt).getDate(),
      month: dtGetMonth(e.dt_txt),
      time: `${dtGetHour2Digit(e.dt_txt)}:${dtGetMinute(e.dt_txt)}`,
    };
  });

  function fiveDaysForecastFilter(forecasts: any[]) {
    const uniqueDaysForecast: any[] = [];
    const seenDates = new Set();

    forecasts.forEach((item) => {
      const dateKey = `${item.date} ${item.month}`;
      if (!seenDates.has(dateKey) && item.time == '09:00') {
        // if (item.time == "12:00") {
          seenDates.add(dateKey);
          uniqueDaysForecast.push(item);
        // }
      }
    });

    return uniqueDaysForecast;
  }

  console.log(fiveDaysForecastFilter(forecasts).splice(1,4));

  return <div></div>;
}
