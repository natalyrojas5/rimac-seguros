import { useContext } from "react";
import { RimacContext } from "@/context";
import { useHeaderTitle } from "@/components/HeaderTitle/hooks";

export const useResumen = () => {
  const { state } = useContext(RimacContext);
  const { getUser } = useHeaderTitle();

  return {
    names: getUser(),
    plan: { name: state?.USER.plan.name, price: state?.USER.plan.price },
    nro_doc: state?.USER.nro_doc,
    phone: state?.USER.phone,
    type_doc: state?.USER.type_doc,
  };
};
