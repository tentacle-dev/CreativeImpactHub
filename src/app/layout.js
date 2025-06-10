import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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
  title: "Creatve Impact Hub",
  description: "Empowering your business with top-notch IT solutions and support.",
  verification: {
    google: "SA1HMV360lG5yutX6QP2g5hDoUqIVMS9TZiANDQOl34",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="SA1HMV360lG5yutX6QP2g5hDoUqIVMS9TZiANDQOl34" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
