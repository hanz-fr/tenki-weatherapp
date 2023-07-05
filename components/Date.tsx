import React from "react";

interface DateTimeInterface {
  time: string;
  date: { date: string; day: string; month: string; year: number };
  isLoading: boolean;
  isValidating: boolean;
  error: any;
}

export default function Date(props: { dateTime: DateTimeInterface }) {
  if (props.dateTime.isLoading)
    return (
      <div className="flex flex-col gap-[5px] animate-pulse">
        <div className="w-16 h-4 rounded-md bg-[#C8C8C8]"></div>
        <div className="w-28 h-8 rounded-lg bg-[#C8C8C8]"></div>
        <div className="w-10 h-4 rounded-md bg-[#C8C8C8]"></div>
      </div>
    );

  return (
    <div className="flex flex-col">
      <div className="text-md" style={{ color: "#30373E" }}>
        {props.dateTime.date.day}
      </div>
      <div className="text-3xl font-semibold" style={{ color: "#30373E" }}>
        {props.dateTime.date.date} {props.dateTime.date.month}
      </div>
      <div className="text-md" style={{ color: "#30373E" }}>
        {props.dateTime.date.year}
      </div>
    </div>
  );
}
