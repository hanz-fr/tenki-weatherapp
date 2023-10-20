export async function getOpenWeatherData(lat: number, lon: number) {
  const API_KEY = process.env.OPEN_WEATHER_KEY;

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  );

  const json = await res.json();

  const list = json.list;

  return list;
}
