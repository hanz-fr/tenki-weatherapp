import React from "react";

interface DateInterface {
  date: string,
  day: string,
  month: string,
  year: number
}

export default function Date(props: {date: DateInterface}) {
  return (
    <div className="flex flex-col">
      <div className="text-md" style={{ color: "#30373E" }}>
        {props.date.day}
      </div>
      <div className="text-3xl font-semibold" style={{ color: "#30373E" }}>
        {props.date.date} {props.date.month}
      </div>
      <div className="text-md" style={{ color: "#30373E" }}>
        {props.date.year}
      </div>
    </div>
  );
}
