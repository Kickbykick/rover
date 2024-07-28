import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import TopBanner from "@/components/TopBanner";
import { Toaster } from "@/components/ui/toaster";

const roboto = Roboto({weight: "300", subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Rover",
  description: "Rover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-screen bg-white font-sans ${roboto.className}`}>
        {/* <TopBanner/> */}
        <Navbar />
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
