import React from "react";

interface DateTimeInterface {
  day: string;
  date: number;
  month: string;
  year: number;
  time: string;
}

export default function Date(props: { datetime: DateTimeInterface | any }) {
  return (
    <div className="flex flex-col">
      <div className="text-md" style={{ color: "#30373E" }}>
        {props?.datetime?.day}
      </div>
      <div
        className="text-2xl md:text-3xl font-semibold"
        style={{ color: "#30373E" }}
      >
        {props?.datetime?.date} {props.datetime?.month}
      </div>
      <div className="text-md" style={{ color: "#30373E" }}>
        {props?.datetime?.year}
      </div>
    </div>
  );
}
