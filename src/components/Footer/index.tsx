import Image from "next/image";
import { imgLogoRimacWhite } from "@/assets/images";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-c-primary py-8 mt-6">
      <div className="container-cus flex justify-between items-center flex-col gap-4 lg:flex-row">
        <Image src={imgLogoRimacWhite} width={85} height={42} alt="Rimac" />
        <p className="text-white">© {year} RIMAC Seguros y Reaseguros.</p>
      </div>
    </footer>
  )
}
