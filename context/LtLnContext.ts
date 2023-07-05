"use client";
import { createContext, useContext } from "react";

interface LtLnProps {
    lat: number,
    lon: number
}

export const LtLnContext = createContext<LtLnProps>({
    lat: 0,
    lon: 0
});

const LtLn = useContext(LtLnContext);

console.log(LtLn);
