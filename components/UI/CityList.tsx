import React from "react";

export default function CityList(props: {
  cityName: string;
  cityCountryCode: string;
  lat: string;
  long: string;
  listVisibility: string;
  onItemClick: (item: {
    name: string;
    latitude: string;
    longitude: string;
  }) => void;
}) {
  let className =
    `w-full text-start flex justify-between cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 px-5 py-2 my-2 ` +
    props.listVisibility;

  const buttonHandler = () => {
    props.onItemClick({
      name: props.cityName,
      latitude: props.lat,
      longitude: props.long,
    });
  };

  return (
    <>
      <button onClick={buttonHandler} className={className}>
        <div className="font-medium">{props.cityName}</div>
        <div className="text-sm font-normal text-gray-500">
          {props.cityCountryCode}
        </div>
      </button>
    </>
  );
}
