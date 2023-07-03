"use client";
import { useState } from "react";
import { getCurrentWeather } from "../api/getCurrentWeather";
import useSWR from "swr";

export default function ApiTestPage() {

  const [city, setCity] = useState('');

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(city.length>0 ?
    `http://api.weatherapi.com/v1/current.json?key=c9e6cb3718574d2293d42758230207&q=${city}`: null,
    fetcher
  );

  const submitHandler = (e:any) => {
    e.preventDefault();
    setCity(e.target[0].value);
  }

  return (
    <div>
      <p className="font-bold">API Test Page</p>
      <form onSubmit={submitHandler}>
        <input/>
        <button type="submit">Find</button>
      </form>
      {error && <div>Failed fetching data.</div>}
      {isLoading && <div>Loading API data...</div>}
      {data && <div>{JSON.stringify(data, null, 2)}</div>}
    </div>
  );
}
