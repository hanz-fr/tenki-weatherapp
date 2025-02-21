import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

import CityContextProvider from "@/context/CityContextProvider";
import { ThemeModeScript } from "flowbite-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tenki",
  description: "Weather App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body className={inter.className}>
        <div className="mx-10 lg:px-5 lg:mx-auto lg:container">
          <CityContextProvider>{children}</CityContextProvider>
        </div>
        <script src="./node_modules/preline/dist/preline.js"></script>
      </body>
    </html>
  );
}
