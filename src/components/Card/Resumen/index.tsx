"use client";

import Image from "next/image";
import { useResumen } from "./hooks"
import { iconFamily } from "@/assets/icons";

export const CardResumen = () => {
  const { names, plan, nro_doc, phone, type_doc } = useResumen();

  return (
    <aside className="shadow-card p-6 rounded-2xl">
      <p className="text-c-neutral-600 text-sm font-semibold uppercase mb-6">Precios calculados para:</p>
      <div className="mb-4 flex gap-3 items-center">
        <Image src={iconFamily} alt="Icono Familia" width={30} height={30} />
        <h2 className="text-2xl font-semibold text-c-neutral-600">{names}</h2>
      </div>
      <hr />
      <div className="mt-4 text-c-neutral-600">
        <h3 className="text-xl mb-2 font-semibold ">Responsable de pago</h3>
        <div className="flex gap-4 mb-2">
          <p className="uppercase">{type_doc}: </p>
          <p>{nro_doc}</p>
        </div>
        <div className="flex gap-2">
          <p>Celular: </p>
          <p>{phone}</p>
        </div>
      </div>
      <div className="mt-4 text-c-neutral-600">
        <h3 className="text-xl mb-2 font-semibold ">Plan elegido</h3>
        <div className="flex gap-4 mb-2">
          <p>{plan.name} </p>
        </div>
        <div className="flex gap-2">
          <p>Costo del Plan: : </p>
          <p>${plan.price} al mes</p>
        </div>
      </div>
    </aside>
  )
}
