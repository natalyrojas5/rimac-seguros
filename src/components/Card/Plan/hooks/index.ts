"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";

import { RimacContext } from "@/context";
import { TYPES } from "@/store";

export const useCardPlan = (price: number) => {
  const router = useRouter();
  const { state, dispatch } = useContext(RimacContext);

  let currentPrice = price;
  const isCurrentPlanPeople = state?.PLANS.current === "PEOPLE";

  if (isCurrentPlanPeople) {
    currentPrice = price - price * 0.05;
  }

  const selectPlan = (plan: string, price: number) => {
    const payload = { plan: { name: plan, price } };
    if (typeof window === "undefined" && typeof localStorage === "undefined")
      return;
    const localStorageUser = window?.localStorage.getItem("user");

    if (localStorageUser) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          ...JSON.parse(localStorageUser),
          ...payload,
        })
      );
    }
    dispatch({
      type: TYPES.SET_USER,
      payload,
    });
    router.push("/dashboard/resumen");
  };

  return {
    isCurrentPlanPeople,
    currentPrice,
    selectPlan,
  };
};
