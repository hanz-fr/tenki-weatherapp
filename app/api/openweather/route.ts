import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";
import axios from "axios";
import useSWR from "swr";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  const { data, error } = useSWR(
    `https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${lat}&lon=${lon}&appid=17cfe2953918a523f741c9c922f94f54`,
    fetcher
  );
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${lat}&lon=${lon}&appid=17cfe2953918a523f741c9c922f94f54`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );

  const weatherData = await res.json();

  return NextResponse.json({ ...data });
}
