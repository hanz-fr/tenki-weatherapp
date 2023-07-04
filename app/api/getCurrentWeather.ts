const getCurrentWeather = async () => {
  const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=c9e6cb3718574d2293d42758230207&q=Melbourne`);
  return res.json();
}

export default getCurrentWeather;