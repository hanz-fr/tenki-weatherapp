import getCityDateTime from "./getCityDateTime";

const getCurrentWeather = async () => {
  const res = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=Melbourne`
  );

  const currentWeatherJson = await res.json();

  /* Current City Details */
  const { name, country, lat, lon } = await currentWeatherJson.location;

  /* Current Weather Details */
  const { temp_f, temp_c } = await currentWeatherJson.current;
  const condition = currentWeatherJson.current.condition.text;

  /* Get city time from given city latitude and longitude */
  const cityDateTime = await getCityDateTime(lat, lon);

  const currentCityWeather = {
    name: name,
    country: country,
    latitude: lat,
    longitude: lon,
    temp_f: temp_f,
    temp_c: temp_c,
    condition: condition,
    time: cityDateTime.time,
    date: cityDateTime.date,
  };

  return currentCityWeather;
};

export default getCurrentWeather;
