import React from "react";
import { useSelector } from 'react-redux';

export default function Time(props: { time:string }) {

  // const data = useSelector((state: RootState) => state.data);

  return (
    <div className="my-auto text-2xl" style={{ color: "#30373E" }}>
      {props.time}
    </div>
  );
}
