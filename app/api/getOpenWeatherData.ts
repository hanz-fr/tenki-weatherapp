import { capitalizeWord } from "@/lib/utils/capitalizeWord";
import { countryCodeToName } from "@/lib/utils/countryCodeToName";
import { dtGetDay } from "@/lib/utils/dtGetDay";
import { dtGetHour2Digit } from "@/lib/utils/dtGetHour";
import { dtGetMinute } from "@/lib/utils/dtGetMinute";
import { dtGetMonth } from "@/lib/utils/dtGetMonth";
import { getCurrentDate } from "@/lib/utils/getCurrentDate";
import { unixTimeConverter } from "@/lib/utils/unixTimeConverter";

type weatherProps = {
  id: number;
  condition: string;
  icon: string;
  date: string;
  day: string;
  month: number;
  time: string;
};

export async function getOpenWeatherData(lat: string, lon: string) {
  const API_KEY = process.env.OPEN_WEATHER_KEY;

  const currentDate = getCurrentDate();

  /* set default to tokyo if lat and lon is 0 */
  if (lat == '0' && lon == '0') {
    lat = '35.6895';
    lon = '139.69171';
  }

  const forecastPromise = fetch(
    `https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${lat}&lon=${lon}&appid=${API_KEY}`
  );

  const currentWeatherPromise = fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${API_KEY}`
  );

  try {
    const [forecastResponse, currentWeatherResponse] = await Promise.all([
      forecastPromise,
      currentWeatherPromise,
    ]);

    if (forecastResponse.ok && currentWeatherResponse.ok) {
      const forecastData = await forecastResponse.json();
      const currentWeatherJSON = await currentWeatherResponse.json();

      const currentWeatherData = {
        weather: {
          id: currentWeatherJSON?.weather[0].id,
          icon: currentWeatherJSON?.weather[0].icon,
          description: capitalizeWord(
            currentWeatherJSON?.weather[0].description
          ),
        },
        main: {
          temp: currentWeatherJSON?.main.temp,
          temp_min: currentWeatherJSON?.main.temp_min,
          temp_max: currentWeatherJSON?.main.temp_max,
          pressure: currentWeatherJSON?.main.pressure,
          humidity: currentWeatherJSON?.main.humidity,
        },
        wind: {
          speed: currentWeatherJSON?.wind.speed,
          deg: currentWeatherJSON?.wind.deg,
          gust: currentWeatherJSON?.wind.gust,
        },
        country: countryCodeToName(currentWeatherJSON?.sys.country),
        city: currentWeatherJSON?.name,
        datetime: unixTimeConverter(currentWeatherJSON?.dt),
      };

      const forecastList = await forecastData.list;

      const forecasts = forecastList?.map((e: any) => {
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

      const fiveDaysForecastFilter = (forecasts: any[]) => {
        const uniqueDaysForecast: any[] = [];
        const seenDates = new Set();

        forecasts?.forEach((item) => {
          const dateKey = `${item.date} ${item.month}`;
          if (!seenDates.has(dateKey) && item.date != currentDate && item.time == "09:00") {
            seenDates.add(dateKey);
            uniqueDaysForecast.push(item);
          }
        });

        return uniqueDaysForecast;
      };

      const fiveDayForecasts = fiveDaysForecastFilter(forecasts);

      return {
        fiveDayForecasts,
        currentWeatherData,
      };
    } else {
      console.error("One or both requests failed.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
