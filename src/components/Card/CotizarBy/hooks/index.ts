import { useContext } from "react";
import { RimacContext } from "@/context";

export const useCotizarBy = () => {
  const { state } = useContext(RimacContext);

  return { current: state?.PLANS.current };
};
