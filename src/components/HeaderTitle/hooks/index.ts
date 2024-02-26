"use client";

import { useContext } from "react";
import { RimacContext } from "@/context";

export const useHeaderTitle = () => {
  const { state } = useContext(RimacContext);

  const firstLetterCapitalized = (word: string) => {
    return word.charAt(0).toUpperCase() + word.toLowerCase().slice(1);
  };

  const getUser = () => {
    const names = state?.USER.names.split(" ");
    let formattName = " ";
    names?.forEach((name: string) => {
      formattName += firstLetterCapitalized(name) + " ";
    });
    return formattName;
  };

  return {
    getUser,
    firstLetterCapitalized,
  };
};
