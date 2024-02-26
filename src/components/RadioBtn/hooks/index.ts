import { useContext } from "react";
import { RimacContext } from "@/context";
import { TYPES } from "@/store";

export const useRadioBtn = () => {
  const { state, dispatch } = useContext(RimacContext);

  const currentPlan = state?.PLANS.current;

  const toggleSetPlan = (plan: string) => {
    if (typeof localStorage === "undefined") return;
    const localStorageUser = localStorage.getItem("user");

    if (localStorageUser) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          ...JSON.parse(localStorageUser),
          plan,
        })
      );
    }
    dispatch({
      type: TYPES.SET_PLAN,
      payload: plan,
    });
  };

  return { currentPlan, toggleSetPlan };
};
