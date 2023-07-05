const getCityTime = async (latitude: number, longitude: number) => {
  /* Fetch API */
  const timestamp = Math.floor(Date.now() / 1000); // Get current timestamp in seconds
  const url = `https://api.timezonedb.com/v2.1/get-time-zone?key=${process.env.TIMEZONEDB_API_KEY}&format=json&by=position&lat=${latitude}&lng=${longitude}&time=${timestamp}`;
  const res = await fetch(url, { next: { revalidate: 60 } });

  /* Format the result */
  const { formatted } = await res.json();
  const options: Intl.DateTimeFormatOptions = {
    hour12: false,
    hour: "numeric",
    minute: "numeric",
  };
  const cityDate = new Date(formatted);

  /* List of Days */
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  /* List of Months */
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  /* Format again */
  const date = ("0" + cityDate.getDate()).slice(-2);
  const day = weekday[cityDate.getDay()];
  const month = monthNames[cityDate.getMonth()];
  const year = cityDate.getFullYear();
  const cityTime = cityDate.toLocaleString([], options);

  /* Assign all the variable into single object */
  const cityDateTime = {
    date: { 
      date: date,
      day: day,
      month: month,
      year: year,
    },
    time: cityTime,
  }

  return cityDateTime;
};

export default getCityTime;
