"use client";


import Image from "next/image";
import "./styles/index.scss";

import { RadioBtn } from "@/components";
import { useCotizarBy } from "./hooks";
import { CardCotizarByProps } from "./interface";

export const CardCotizarBy = ({ title, description, icon, name }: CardCotizarByProps) => {
  const { current } = useCotizarBy()

  return (
    <aside className={`card__cotizarBy rounded-2xl p-6 shadow-card ${current === name ? "border-2 border-black" : ""}`}>
      <div className="flex items-center justify-end card__cotizarBy__radiobtn">
        <RadioBtn value={name} />
      </div>
      <Image src={icon} alt="Icono" width={48} height={48} className="mb-2" />
      <h2 className="font-bold text-2xl mb-2">{title}</h2>
      <p className="text-sm card__cotizarBy__description">{description}</p>
    </aside>
  )
}
