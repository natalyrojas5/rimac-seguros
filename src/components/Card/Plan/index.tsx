"use client"

import Image from "next/image";
import { Button } from "@/components";
import { CardPlanProps } from "./interfaces";
import { useCardPlan } from "./hooks";

export const CardPlan = ({ name, description, icon, isRecommeded, price }: CardPlanProps) => {
  const { isCurrentPlanPeople, currentPrice, selectPlan } = useCardPlan(price)

  return (
    <aside className="shadow-card rounded-lg p-6 h-full lg:ms-5">
      <div className="flex items-center" style={{ height: "3rem" }}>
        {isRecommeded && <p className="bg-c-green p-1 px-3 font-semibold rounded-md text-sm">Plan recomendado</p>}
      </div>
      <div className="mb-3 flex justify-between items-start">
        <h2 className="font-semibold text-xl">{name} </h2>
        <Image src={icon} width={50} height={50} alt="Icon" />
      </div>
      <div className="mb-4">
        <p className="text-c-neutral-300 text-sm font-semibold">COSTO DEL PLAN</p>
        {isCurrentPlanPeople && <p className="line-through text-sm text-c-neutral-300">$ ${price} antes</p>}
        <p className="font-bold mt-1 text-lg">${currentPrice} al mes</p>
      </div>
      <hr />
      <div className="flex flex-col justify-between">
        <ul className="mt-4 px-6" style={{ minHeight: "22rem" }}>
          {description.map((text, i) => <li key={i} className="list-disc mb-2">{text}</li>)}
        </ul>
        <Button type="button" text="Seleccionar Plan" btnStyle="button" className="bg-c-red border-c-red" onClick={() => selectPlan(name, currentPrice)} />
      </div>
    </aside>
  )
}
