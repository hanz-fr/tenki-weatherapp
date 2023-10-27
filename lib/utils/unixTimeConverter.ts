import { dtGetDay } from "./dtGetDay";

export function unixTimeConverter(UNIX_timestamp: number, timezone?: number) {
  const timezoneOffset = timezone! * 1000;

  var utcDate = new Date(UNIX_timestamp * 1000);
  var a = new Date(utcDate.getTime() + timezoneOffset);
  var months = [
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
  var year = a.getUTCFullYear();
  var month = months[a.getUTCMonth()];
  var day = dtGetDay(a.toString(), false);
  var date = a.getUTCDate();
  var hour = a.getUTCHours() < 10 ? "0" + a.getUTCHours() : a.getUTCHours();
  var min = a.getUTCMinutes() < 10 ? "0" + a.getUTCMinutes() : a.getUTCMinutes();
  var sec = a.getUTCSeconds() < 10 ? "0" + a.getUTCSeconds() : a.getUTCSeconds();

  return {
    day: day,
    date: date,
    month: month,
    year: year,
    time: `${hour}:${min}`,
  };
}
