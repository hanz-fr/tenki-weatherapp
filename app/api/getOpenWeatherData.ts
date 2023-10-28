import { capitalizeWord } from "@/lib/utils/capitalizeWord";
import { countryCodeToName } from "@/lib/utils/countryCodeToName";
import { dtGetDay } from "@/lib/utils/dtGetDay";
import { dtGetHour2Digit } from "@/lib/utils/dtGetHour";
import { dtGetMinute } from "@/lib/utils/dtGetMinute";
import { dtGetMonth } from "@/lib/utils/dtGetMonth";
import { dtGetYear } from "@/lib/utils/dtGetYear";
import { getCurrentDate } from "@/lib/utils/getCurrentDate";
import { unixTimeConverter } from "@/lib/utils/unixTimeConverter";

export async function getOpenWeatherData(lat: string, lon: string) {
  const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_KEY;

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
          id: currentWeatherJSON?.weather[0].id as number,
          icon: currentWeatherJSON?.weather[0].icon as string,
          description: capitalizeWord(
            currentWeatherJSON?.weather[0].description
          ) as string,
        },
        main: {
          temp: currentWeatherJSON?.main.temp.toFixed(1) as number,
          temp_min: currentWeatherJSON?.main.temp_min as number,
          temp_max: currentWeatherJSON?.main.temp_max as number,
          pressure: currentWeatherJSON?.main.pressure as number,
          humidity: currentWeatherJSON?.main.humidity as number,
        },
        wind: {
          speed: currentWeatherJSON?.wind.speed as number,
          deg: currentWeatherJSON?.wind.deg as number,
          gust: currentWeatherJSON?.wind.gust as number,
        },
        country: countryCodeToName(currentWeatherJSON?.sys.country) as string,
        city: currentWeatherJSON?.name as string,
        datetime: unixTimeConverter(currentWeatherJSON?.dt, currentWeatherJSON?.timezone) as any,
      };

      const forecastList = await forecastData.list;

      const forecasts = forecastList?.map((e: any) => {
        return {
          id: e.weather[0].id,
          condition: e.weather[0].main,
          temp: e.main.temp,
          icon: e.weather[0].icon,
          date: new Date(e.dt_txt).getDate(),
          day: dtGetDay(e.dt_txt, false),
          month: dtGetMonth(e.dt_txt, true),
          year: dtGetYear(e.dt_txt),
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
