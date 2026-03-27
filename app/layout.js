import { Lexend } from "next/font/google";
import "./globals.css";
import CursorGlow from "@/components/CursorGlow";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "CyberShield Technologies",
  description: "Engineering robust backend-heavy, industrial, and AI systems for modern enterprises.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${lexend.variable} ${lexend.className}`}>
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
