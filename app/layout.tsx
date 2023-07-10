"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { useEffect } from "react";

import CityContextProvider from "@/context/CityContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tenki",
  description: "Tenki Weather App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    import("preline" as any);
  }, []);
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-10 my-5 lg:px-5 lg:mx-auto lg:container">
          <div className="flex flex-col">
            <CityContextProvider>
              {children}
            </CityContextProvider>
          </div>
        </div>
        <script src="./node_modules/preline/dist/preline.js"></script>
      </body>
    </html>
  );
}
