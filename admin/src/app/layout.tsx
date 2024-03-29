

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "My Book Admin",
  description: "New Generation Social site",
};


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-auto max-w-5xl text-2xl gap-2 mb-10">
        {children}
        </div> 
   </body>
  </html>
  );
}
