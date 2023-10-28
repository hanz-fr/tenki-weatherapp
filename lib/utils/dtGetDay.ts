export function dtGetDay(dt: string, threeLetters: boolean) {
  var days3l = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const date = new Date(dt);
  const day =
    threeLetters == true ? days3l[date.getDay()] : days[date.getDay()];

  return day;
}
