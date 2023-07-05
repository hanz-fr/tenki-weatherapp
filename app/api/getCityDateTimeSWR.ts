"use client";
import useSWR  from 'swr'

export function getCityDateTimeSWR(lat:number, lon:number) {

  const fetcher = (url:string) => fetch(url).then(res => res.json())

  const { data, error, isLoading, isValidating } = useSWR(`https://api.timezonedb.com/v2.1/get-time-zone?key=FPV7HVHK9PC5&format=json&by=position&lat=${lat}&lng=${lon}`, fetcher, { refreshInterval: 60000 })

  const options: Intl.DateTimeFormatOptions = {
    hour12: false,
    hour: "numeric",
    minute: "numeric",
  };
  const cityDate = new Date(data?.formatted);

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
    isLoading: isLoading,
    isValidating: isValidating,
    error: error,
  }

  const swrResult = {
    data,
    error: error,
    isLoading: isLoading,
    isValidating: isValidating
  }

  // render data
  return cityDateTime;
}
