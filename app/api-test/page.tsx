"use client";

import { getCurrentWeatherSWR } from '../api/getCurrentWeatherSWR';

export default function page() {

  const data = getCurrentWeatherSWR("Jakarta");

  // render data
  /* if (data.isLoading) return <div className="rounded-lg w-20 h-5 bg-gray-400 animate-pulse"></div>
  if (data.isValidating) return <div className="rounded-lg w-20 h-5 bg-gray-400 animate-pulse"></div> */
  /* if (data.error) return <div>An error occurred</div> */

  return <div>{ data.name }</div>
}
