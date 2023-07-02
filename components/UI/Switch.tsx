import React from "react";

export default function Switch() {
  return (
    <>
      <input
        type="checkbox"
        id="hs-basic-usage"
        className="relative w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-[#2F3B49] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 border border-transparent ring-1 ring-transparent ring-offset-white focus:outline-none appearance-none dark:bg-[#D1D1D1] dark:checked:bg-[#2F3B49] before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-[#607FA2]"
      />
    </>
  );
}
