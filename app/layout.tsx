import "./globals.css";
import { Inter } from "next/font/google";

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
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="m-10">
          <div className="flex flex-col">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
