import type { Metadata } from "next";
import { Quicksand, Geist_Mono } from "next/font/google";  
import "./globals.css";
import Navbar from "../components/Navbar";

const quicksand = Quicksand({
  variable: "--font-quicksand",           
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],  
  display: "swap",                      
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maya Metro Hospital",          
  description: "Your Health is Our Priority – Book appointments, online consultations & more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}