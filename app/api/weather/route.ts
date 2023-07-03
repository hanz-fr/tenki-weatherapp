import axios from "axios";
import useSWR from "swr";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(
    `https://api.weatherapi.com/v1/current.json?key=c9e6cb3718574d2293d42758230207&q=Jakarta`,
    fetcher
  );
  return NextResponse.json(data, { status: 200 });
}
