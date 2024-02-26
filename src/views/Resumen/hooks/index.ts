import { useRouter } from "next/navigation";
import { useContext } from "react";
import { RimacContext } from "@/context";
import { TYPES } from "@/store";

export const useResumen = () => {
  const router = useRouter();
  const { dispatch } = useContext(RimacContext);

  const resetContext = () => {
    if (typeof localStorage === "undefined") return;
    localStorage.removeItem("user");

    router.push("/");
    dispatch({
      type: TYPES.SET_USER,
      payload: {
        isLogged: false,
        names: "",
        nro_doc: "",
        phone: "",
        acceptPrivacity: false,
        acceptComunications: false,
        plan: {
          name: "",
          price: "",
        },
      },
    });
    dispatch({
      type: TYPES.SET_PLAN,
      payload: "",
    });
  };
  return {
    resetContext,
  };
};
