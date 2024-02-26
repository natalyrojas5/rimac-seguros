import { useContext } from "react";
import { RimacContext } from "@/context";
import { TYPES } from "@/store";
import { baseUrlApiChange } from "@/helpers";
import { iconClinic, iconHome } from "@/assets/icons";

export const usePlans = () => {
  const { dispatch } = useContext(RimacContext);

  const getPlans = async () => {
    const response = await fetch(`${baseUrlApiChange}/api/plans.json`);
    if (response.status !== 200) return;

    const JSON = await response.json();
    const plans = JSON.list;
    if (plans?.length > 0) {
      plans?.forEach((plan: any) => {
        if (plan.name.includes("Clínica")) {
          plan.icon = iconClinic;
          plan.isRecommeded = true;
        } else {
          plan.icon = iconHome;
        }
      });
      dispatch({
        type: TYPES.SET_PLANS,
        payload: plans,
      });
    }
  };
  return { getPlans };
};
