export function dtGetDay(dt: string, threeLetters: boolean) {
  var days3l = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const date = new Date(dt);
  const day =
    threeLetters == true ? days3l[date.getDay()] : days[date.getDay()];

  return day;
}
