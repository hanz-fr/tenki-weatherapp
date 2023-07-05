import React from "react";

export default function Time(props: {time:string}) {
  return (
    <div className="my-auto text-2xl" style={{ color: "#30373E" }}>
      {props.time}
    </div>
  );
}
