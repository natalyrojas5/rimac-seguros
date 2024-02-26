import { useContext } from "react";
import { RimacContext } from "@/context";
import { TYPES } from "@/store";

export const useNavbar = () => {
  const { dispatch } = useContext(RimacContext);

  const toggleModalBuy = () => {
    dispatch({
      type: TYPES.TOGGLE_MODAL,
      payload: true,
    });
  };
  return {
    toggleModalBuy,
  };
};
