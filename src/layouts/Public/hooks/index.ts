"use client";

import { useContext } from "react";
import { RimacContext } from "@/context";
import { TYPES } from "@/store";

export const useLayoutPublic = () => {
  const {
    state: { MODALS },
  } = useContext(RimacContext);

  return {
    MODALS,
  };
};
