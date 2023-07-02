import React from "react";

export default function SearchBar() {
  return (
    <div className="w-full max-w-screen-xl mx-auto">
      <div className="flex justify-center py-2 px-3">
        <div className="w-full max-w-md relative">
          <div className="bg-white shadow-md rounded-lg px-3 py-2">
            <div className="flex items-center">
              <input
                className="w-full rounded-md text-gray-700 leading-tight focus:outline-none text-sm md:text-base py-1 px-2"
                id="search"
                type="text"
                placeholder="Search cities..."
              />
              <div className="pl-2">
                <svg
                  className="fill-current text-gray-500 w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="heroicon-ui"
                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                  />
                </svg>
              </div>
            </div>
          </div>
          {/* List of Cities */}
          {/* <div className="mt-2 py-3 w-full text-sm absolute z-20 rounded-lg bg-white shadow-lg">
            <div className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 px-5 py-2 my-2">
              <div className="flex-grow font-medium">Tighten Co.</div>
              <div className="text-sm font-normal text-gray-500 tracking-wide">
                Team
              </div>
            </div>
            <div className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 px-5 py-2 my-2">
              <div className="flex-grow font-medium">Tighten Co.</div>
              <div className="text-sm font-normal text-gray-500 tracking-wide">
                Team
              </div>
            </div>
            <div className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 px-5 py-2 my-2">
              <div className="flex-grow font-medium">Tighten Co.</div>
              <div className="text-sm font-normal text-gray-500 tracking-wide">
                Team
              </div>
            </div>
            <div className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 px-5 py-2 my-2">
              <div className="flex-grow font-medium">Tighten Co.</div>
              <div className="text-sm font-normal text-gray-500 tracking-wide">
                Team
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
