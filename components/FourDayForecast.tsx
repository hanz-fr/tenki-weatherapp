import DayForecast from "@/components/UI/DayForecast";

export default function FourDaysForecast(props: {
  forecasts: any[] | undefined,
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
        ))}
    </div>
  );
}
