export function dtGetMonth(
  dt: string,
  isNumber: boolean,
  isThreeLetters: boolean
) {
  const month = new Date(dt).getMonth();

  var monthsNumber = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];

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

  var months3l = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  if (isNumber == true) {
    return monthsNumber[month];
  } else if (isThreeLetters == true) {
    return months3l[month];
  } else {
    return months[month];
  }
}
