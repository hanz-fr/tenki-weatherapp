"use client";
/* import { useState } from "react";
import useSWR from "swr"; */

export default async function ApiTestPage() {

  /* const [city, setCity] = useState(''); */

  /* const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(city.length>0 ?
    `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${city}`: null,
    fetcher
  ); */

  return (
    <div>
      <p className="font-bold">API Test Page</p>
      <form>
        <input/>
        <button type="submit">Find</button>
      </form>
      <div></div>
      {/* {error && <div>Failed fetching data.</div>}
      {isLoading && <div>Loading API data...</div>}
      {data && <div>{JSON.stringify(data, null, 2)}</div>} */}
    </div>
  );
}
