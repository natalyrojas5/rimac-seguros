"use client"

import { useContext } from "react";
import { RimacContext } from "@/context";
import { LayoutPrivate } from "../Private";
import { LayoutPublic } from "../Public";
import { LayoutProps } from "../interface";
import { Footer, Navbar } from "@/components";

export const Layout = ({ children }: LayoutProps) => {
  const { state } = useContext(RimacContext);

  return (
    <>
      <Navbar />
      {
        state?.USER.isLogged ?
          <LayoutPrivate>
            {children}
          </LayoutPrivate>
          : <LayoutPublic>
            {children}
          </LayoutPublic>
      }
      <Footer />
    </>
  )
}
