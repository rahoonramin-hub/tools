import Navbar from "@/components/navbar";
import { GoogleAnalytics } from 'next/third-parties/google';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Convert Files Online",
  description: "Just drag your files and drop them, select format and hit convert. That's it!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        <main>{children}</main>
        
        <GoogleAnalytics gaId="G-4NJG903Z4E" />
      </body>
    </html>
  );
}