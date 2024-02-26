import { ChangeEvent, useContext, useState } from "react";
import { useRouter } from "next/navigation";

import { RimacContext } from "@/context";
import { TYPES } from "@/store";

import { initialStateFields } from "../helpers/initialStateFields";
import { TargetProps } from "../interface";

export const useForm = () => {
  const router = useRouter();
  const { dispatch } = useContext(RimacContext);
  const [error, setError] = useState({ isShow: false, message: "" });
  const [fields, setFields] = useState(initialStateFields);

  const toggleModalTerms = () => {
    dispatch({
      type: TYPES.TOGGLE_MODAL,
      payload: true,
    });
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError({ isShow: false, message: "" });

    let fieldsErr = [];

    if (fields.nro_doc.value.length < 8 && fields.type_doc.value === "dni") {
      fieldsErr.push("nro_doc");
    }
    if (fields.nro_doc.value.length < 11 && fields.type_doc.value === "ruc") {
      fieldsErr.push("nro_doc");
    }

    if (fields.phone.value.length < 9) {
      fieldsErr.push("phone");
    }

    if (!fields.acceptPrivacity.value) {
      fieldsErr.push("acceptPrivacity");
    }

    if (!fields.acceptComunications.value) {
      fieldsErr.push("acceptComunications");
    }

    if (fieldsErr.length > 0) {
      fieldsErr?.forEach((field: string) => {
        setFields((prev: any) => ({
          ...prev,
          [field]: { ...prev[field], isValid: false },
        }));
      });
      setError({
        isShow: true,
        message: "Por favor ingrese los campos requeridos  (*)",
      });
      return;
    }

    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({
        nro_doc: fields.nro_doc.value,
        type_doc: fields.type_doc.value,
      }),
    });
    const responseJSON = await response.json();
    if (
      response.status === 200 &&
      (responseJSON.nombres || responseJSON.razonSocial)
    ) {
      const payload = {
        names: "",
        nro_doc: responseJSON.numeroDocumento,
        phone: fields.phone.value,
        type_doc: fields.type_doc.value,
        isLogged: true,
        plan: {
          name: "",
          price: "",
        },
      };

      if (fields.type_doc.value === "dni") {
        payload.names = `${responseJSON.nombres} ${responseJSON.apellidoPaterno} ${responseJSON.apellidoMaterno}`;
      } else {
        payload.names = responseJSON.razonSocial;
      }

      dispatch({ type: TYPES.SET_USER, payload });
      dispatch({ type: TYPES.SET_PLAN, payload: "" });

      if (typeof localStorage === "undefined") return;
      localStorage.setItem("user", JSON.stringify(payload));

      router.push("/dashboard/planes-cobertura");
    } else {
      setError({
        isShow: true,
        message:
          responseJSON.message ??
          "Por favor ingrese un número de documento váido",
      });
    }
  };

  const onChange = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    let { name, value }: TargetProps = e.target;
    if (
      name &&
      e.target instanceof HTMLInputElement &&
      e.target.type === "checkbox"
    ) {
      value = e.target.checked!;
    }

    setFields((prev) => ({
      ...prev,
      [name]: { value, isValid: true },
    }));
  };

  return {
    toggleModalTerms,
    onSubmit,
    onChange,
    fields,
    error,
  };
};
