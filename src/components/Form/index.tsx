"use client";

import "./styles/index.scss";

import { CheckBox, Input, Button } from "@/components";
import { Header } from "./components/Header";
import { useForm } from "./hooks";

export const Form = () => {
  const { toggleModalTerms, onSubmit, onChange, fields, error } = useForm();

  return (
    <div className="form mt-5">
      <Header />
      <form className="mt-6" onSubmit={onSubmit}>
        <div className="mb-4">
          <div className="rounded-lg overflow-hidden   flex">
            <select
              value={fields.type_doc.value}
              onChange={onChange}
              className=" rounded-tl-lg rounded-bl-lg  py-3.5 px-2 pr-4 text-gray-500  border-2 border-r-0 border-gray-400"
              name="type_doc"
            >
              <option value="dni">DNI</option>
              <option value="ruc">RUC</option>
            </select>
            <Input
              onChange={onChange}
              name="nro_doc"
              type="tel"
              textLabel="Nro. de documento*"
              value={fields.nro_doc.value}
              isValid={fields.nro_doc.isValid}
              className="rounded-tl-none rounded-bl-none"
            />
          </div>
        </div>

        <Input
          onChange={onChange}
          name="phone"
          textLabel="Celular*"
          type="tel"
          value={fields.phone.value}
          isValid={fields.phone.isValid}
        />
        {error.isShow && <p className="text-sm text-red-400 mt-4 text-error">{error.message}</p>}
        <div className="my-5">
          <CheckBox
            name="acceptPrivacity"
            textLabel="Acepto lo Política de Privacidad*"
            onChange={onChange}
            checked={fields.acceptPrivacity.value}
            isValid={fields.acceptPrivacity.isValid}
          />
          <CheckBox
            name="acceptComunications"
            textLabel="Acepto la Política Comunicaciones Comerciales*"
            onChange={onChange}
            checked={fields.acceptComunications.value}
            isValid={fields.acceptComunications.isValid}
          />
        </div>



        <Button text="Aplican Términos y Condiciones." type="button" btnStyle="link" className="mb-6" onClick={toggleModalTerms} />
        <Button text="Cotizar aquí" type="submit" btnStyle="button" className="mb-6 lg:w-auto w-full" onClick={() => { }} />
      </form>

    </div>
  )
}
