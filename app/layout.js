import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/HeaderAndFooter/Navbar";
import Footer from "@/components/HeaderAndFooter/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dribbble",
  description: "This is an Dribbble AK-71",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* <Navbar/> */}
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}
