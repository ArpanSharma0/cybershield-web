import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

export const metadata = {
  title: "CyberShield | Digital Agency & Marketing Systems",
  description: "Growth-focused agency that builds revenue-generating websites and marketing systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${instrument.variable} font-sans bg-bg text-text-primary antialiased`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
