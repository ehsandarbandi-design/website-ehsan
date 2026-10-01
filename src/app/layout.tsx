import type { Metadata } from "next";
import { Geist_Mono, Inconsolata, Inter, Kalam } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Figma "Monospace" style (case study eyebrows).
const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
  weight: ["300"],
});

// Handwritten "+ Build" in the case study navbar.
const kalam = Kalam({
  variable: "--font-kalam",
  subsets: ["latin"],
  weight: ["400"],
});

const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ehsan Darbandi — Product Designer",
  description: "I design AI products people actually trust.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${inconsolata.variable} ${kalam.variable} ${mono.variable}`}>
      <body>
        {children}
        <CustomCursor />
      </body>
    </html>
  );
}
