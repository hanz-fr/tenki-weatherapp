import { getOpenWeatherData } from "@/app/api/getOpenWeatherData";

import DayForecast from "@/components/UI/DayForecast";

type weatherProps = {
  id: number;
  condition: string;
  icon: string;
  date: string;
  day: string;
  month: number;
  time: string;
};

export default function FourDaysForecast(props: {
  forecasts: weatherProps[],
}) {
  return (
    <div className="flex justify-between lg:justify-evenly mt-5">
      {props.forecasts
        ?.map((forecast) => (
          <DayForecast
            date={forecast?.date}
            code={forecast?.icon}
            day={forecast?.day}
            month={forecast?.month.toString()}
          />
        ))
        .slice(1)}
    </div>
  );
}
