const getCityTime = async (latitude: number, longitude: number) => {
  const timestamp = Math.floor(Date.now() / 1000); // Get current timestamp in seconds
  const url = `https://api.timezonedb.com/v2.1/get-time-zone?key=${process.env.TIMEZONEDB_API_KEY}&format=json&by=position&lat=${latitude}&lng=${longitude}&time=${timestamp}`;
  const res = await fetch(url);

  const { formatted } = await res.json();
  const options: Intl.DateTimeFormatOptions = {
    hour12: false,
    hour: "numeric",
    minute: "numeric",
  };
  const date = new Date(formatted);
  const cityTime = date.toLocaleString([], options);

  return cityTime;
};

export default getCityTime;
