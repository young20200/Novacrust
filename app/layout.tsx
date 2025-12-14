import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "NovaCrust Checkout",
  description: "Seamless crypto payments",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8`}>
        <main className="w-full max-w-lg animate-in">
            {children}
        </main>
      </body>
    </html>
  );
}