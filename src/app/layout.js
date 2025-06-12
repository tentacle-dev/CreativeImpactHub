import { Geist, Geist_Mono } from "next/font/google";
import "";
import { Analytics } from "@vercel/analytics/next"

import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "Creative Impact Hub",
  description: "Creative Impact Hub empowers businesses with tailored IT solutions, seamless connectivity, and expert support. Our experienced team helps you harness the transformative power of technology to confidently grow and navigate your needs. We serve cities across the GTA region",
  content: 
    "Ur4sxnYDao5A-bCZmQf3tN7fh8rUE69COaj-iFv9O78",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="Ur4sxnYDao5A-bCZmQf3tN7fh8rUE69COaj-iFv9O78" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
