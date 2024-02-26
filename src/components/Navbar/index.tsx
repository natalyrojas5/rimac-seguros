"use client";

import Image from "next/image";

import { iconTel } from "@/assets/icons";
import { imgLogoRimac } from "@/assets/images";
import { Button } from "../Button";
import { useNavbar } from './hooks';

export const Navbar = () => {
  const { toggleModalBuy } = useNavbar();

  return (
    <nav className="container-cus py-5 flex justify-between items-center">
      <Image src={imgLogoRimac} width={74} height={36} alt="Rimac" />
      <div className="flex gap-6">
        <Button
          text="¡Compra por este medio!"
          type="button"
          btnStyle="link-light"
          className="hidden lg:block"
          onClick={toggleModalBuy}
        />
        <div className="flex gap-2 items-center">
          <Image src={iconTel} width={20} height={20} alt="Icono de Telfono" />
          <a href="tel:+01411 6001" className="font-bold text-xl">(01) 411 6001</a>
        </div>
      </div>
    </nav>
  )
}
