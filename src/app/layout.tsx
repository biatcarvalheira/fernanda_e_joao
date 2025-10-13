import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Prata } from "next/font/google";
import { Style_Script } from "next/font/google";



import "./globals.css";
import "@/lib/fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";

// navbar font


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// text font

const prata = Prata({
  subsets: ["latin"],
  weight: "400", // Prata only comes in regular 400
});

const styleScript = Style_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-style-script",
});


export const metadata: Metadata = {
  title: "Fernanda e João",
  description: "Casamento Fernanda e João",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${styleScript.variable} ${prata.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
