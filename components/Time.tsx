import React from "react";

export default function Time() {

  const currentHour = new Date().getHours();
  const currentMinute = new Date().getMinutes();

  return (
    <div className="my-auto text-2xl" style={{ color: "#30373E" }}>
      {currentHour}:{(currentMinute<10?'0'+currentMinute.toString():currentMinute)}
    </div>
  );
}
