import { getCurrentWeatherSWR } from "../api/getCurrentWeatherSWR";
import { getOpenWeatherData } from "../api/getOpenWeatherData";

export default async function page() {
  const data = await getOpenWeatherData(35.6895, 139.69171);

  function timeConverter(UNIX_timestamp: number) {
    var a = new Date(UNIX_timestamp * 1000);
    var months = [
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
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours() < 10 ? "0" + a.getHours() : a.getHours();
    var min = a.getMinutes() < 10 ? "0" + a.getMinutes() : a.getMinutes();
    var sec = a.getSeconds() < 10 ? "0" + a.getSeconds() : a.getSeconds();
    var time =
      date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
    return time;
  }

  const currentDate = new Date().getDate().toString();

  function fiveDaysOnly(e: string[]) {
    const uniqueDates = new Set<string>();

    const filteredArray = e.filter((datetime) => {
      const datetimeParts = datetime.split(" ");
      const date = datetimeParts[0];
      const time = datetimeParts[3];
      if (!uniqueDates.has(date)) {
        if (time === "13:00:00" && currentDate != date) {
          uniqueDates.add(date);
          return true;
        }
      }
      return false;
    });

    return Array.from(filteredArray);
  }

  const timestamp = data.map((e:any) => {
    return timeConverter(e.dt);
  })

  const fiveDayWeather = fiveDaysOnly(timestamp);
  const filteredWeather = data.filter((e:any) => {
    return e.dt == fiveDayWeather;
  });

  console.log(filteredWeather);

  return (
    <div>
      {fiveDayWeather.map((e:any) => (
        <div>{e}</div>
      )).splice(0,4)}
    </div>
  );
}
