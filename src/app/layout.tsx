import { Julius_Sans_One, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import clsx from "clsx";
import "./globals.css";

const JuliusSansOneFont = Julius_Sans_One({
  weight: ["400"],
  subsets: ["latin"],
});

const PoppinsFont = Poppins({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Thanakorn's Portfolio",
  description: "For collect my work journeys",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <link rel="icon" href="/icons/favicon.png" sizes="any" />
      <body className={clsx(JuliusSansOneFont.className, PoppinsFont.variable)}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
