const getCurrentWeather = async () => {
  const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=Melbourne`);
  return res.json();
}

export default getCurrentWeather;