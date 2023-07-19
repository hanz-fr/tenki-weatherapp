import "./globals.css";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import Head from "next/head";

import CityContextProvider from "@/context/CityContextProvider";

const inter = Inter({ subsets: ["latin"] });

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
      <Head>
        <title>Tenki Weather App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={inter.className}>
        <div className="mx-10 lg:px-5 lg:mx-auto lg:container">
          <CityContextProvider>{children}</CityContextProvider>
        </div>
        <script src="./node_modules/preline/dist/preline.js"></script>
      </body>
    </html>
  );
}
