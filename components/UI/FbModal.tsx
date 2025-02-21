"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";

import SearchBar from "./SearchBar";
import { useCityContext } from "@/context/CityContext";

export function FbModal() {
  const [openModal, setOpenModal] = useState(true);
  const { latitude, longitude, setCityLatitude, setCityLongitude } =
    useCityContext();
  const [cityLatInput, setCityLatInput] = useState(latitude);
  const [cityLonInput, setCityLonInput] = useState(longitude);

  const onSearchValueChange = (city: {
    latitude: number;
    longitude: number;
  }) => {
    setCityLatInput(city.latitude as any);
    setCityLonInput(city.longitude as any);
  };

  const submitHandler = () => {
    setCityLatInput(cityLatInput as any);
    setCityLonInput(cityLonInput as any);
  };

  const onLatInputChange = (event: any) => {
    setCityLatInput(event.target.value);
  };

  const onLonInputChange = (event: any) => {
    setCityLonInput(event.target.value);
  };

  return (
    <>
      <Button color="gray" onClick={() => setOpenModal(true)}>
        <svg
          width="30"
          height="30"
          viewBox="0 0 72 88"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M37.8695 24.1021C35.3578 23.6783 32.7764 24.0638 30.4981 25.203C28.2199 26.3422 26.3627 28.1761 25.1949 30.4398C24.027 32.7035 23.609 35.2798 24.0011 37.7967C24.3932 40.3135 25.5752 42.6406 27.3764 44.4417C29.1775 46.2429 31.5045 47.4249 34.0214 47.817C36.5382 48.2091 39.1146 47.791 41.3783 46.6232C43.642 45.4554 45.4759 43.5982 46.6151 41.3199C47.7543 39.0417 48.1398 36.4603 47.716 33.9486"
            stroke="#30373E"
            stroke-width="7"
            stroke-linecap="round"
          />
          <path
            d="M7.83759 56.8369C5.24684 50.2139 3.83334 43.1624 3.83334 36.5233C3.83334 18.5162 18.1766 3.91669 35.8674 3.91669C53.5582 3.91669 67.9014 18.5162 67.9014 36.5233C67.9014 54.3903 57.6785 75.2445 41.7256 82.6964C39.892 83.555 37.892 84 35.8674 84C33.8427 84 31.8428 83.555 30.0091 82.6964C24.9157 80.3178 20.4029 76.5699 16.6229 71.989"
            stroke="#30373E"
            stroke-width="7"
            stroke-linecap="round"
          />
        </svg>
      </Button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Body>
          <SearchBar onValueChange={onSearchValueChange} />
          <div className="flex flex-col gap-7 p-5 overflow-y-auto">
            <div className="flex justify-between">
              <p className="text-[#30373E] text-sm md:text-base">Latitude</p>
              <input
                className="w-1/4 text-sm md:text-base text-[#30373E] transition-colors duration-200 bg-transparent border-b-2 border-b-[#30373E] focus:outline-none focus:border-b-[#5891CA]"
                type="text"
                value={cityLatInput}
                required
                onChange={onLatInputChange}
              />
            </div>
            <div className="flex justify-between">
              <p className="text-[#30373E] text-sm md:text-base">Longitude</p>
              <input
                className="w-1/4 text-sm md:text-base text-[#30373E] transition-colors duration-200 bg-transparent border-b-2 border-b-[#30373E] focus:outline-none focus:border-b-[#5891CA]"
                type="text"
                value={cityLonInput}
                required
                onChange={onLonInputChange}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="py-2 px-4 w-full inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-[#30373E] text-white shadow-sm align-middle hover:bg-[#23282e] focus:outline-none transition-all text-sm"
            onClick={() => setOpenModal(false)}
            type="submit"
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
