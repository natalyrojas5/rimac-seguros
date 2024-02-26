"use client";

import { useContext, useEffect, useState } from "react";
import { RimacContext } from "@/context";

export const useCarouselCardPlans = () => {
  const { state } = useContext(RimacContext);
  const plans = state?.PLANS.list;
  const hasPlans = plans?.length > 0;
  const hasCurrentPlan = state?.PLANS.current;
  const [mQuery, setMQuery] = useState({
    matches: false,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    let mediaQuery = window?.matchMedia("(max-width: 768px)");
    mediaQuery.addEventListener("change", (e) =>
      setMQuery({ matches: e.matches })
    );
    return () =>
      mediaQuery.removeEventListener("change", (e) =>
        setMQuery({ matches: e.matches })
      );
  }, []);

  return {
    hasCurrentPlan,
    plans,
    hasPlans,
    mQuery,
  };
};
