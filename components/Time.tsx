import React from "react";

interface DateTimeInterface {
  time: string;
  date: { date: string; day: string; month: string; year: number };
  isLoading: boolean;
  isValidating: boolean;
  error: any;
}

export default function Time(props: { dateTime: DateTimeInterface }) {

  if (props.dateTime.isLoading)
    return (
      <div className="my-auto h-7 w-16 bg-[#C8C8C8] animate-pulse rounded-md">
      </div>
    );
  return (
    <div className="my-auto text-2xl" style={{ color: "#30373E" }}>
      {props.dateTime.time}
    </div>
  );
}
