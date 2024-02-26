"use client";

import "@/styles/index.scss";

import { usePathname } from "next/navigation";
import { RimacProvider } from "@/context";
import { Navbar, Footer } from "@/components";
import { BRSonoma } from "@/helpers/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;

}>) {
  const path = usePathname()

  return (
    <html lang="en" className={`${BRSonoma.style}`}>
      <body className={`${path === "/" ? "ly-public" : ""} `}>
        <RimacProvider>
          <Navbar />
          {children}
          <Footer />
        </RimacProvider>
      </body>
    </html>
  );
}
