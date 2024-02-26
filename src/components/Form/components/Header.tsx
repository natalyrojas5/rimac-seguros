import Image from "next/image";
import { imgFamily } from "@/assets/images";

export const Header = () => {
  return (
    <div className="form__header">
      <div className="flex lg:block items-center gap-6 flex-row-reverse">
        <Image src={imgFamily} alt="Familia" width={136} height={136} className="block lg:hidden" />
        <div className="w-full lg:mb-0">
          <div className="form__header__tagPromo p-1 rounded-md text-center mb-3 xl:mb-4">
            <p className="font-semibold">Seguro Salud Flexible</p>
          </div>
          <h1 className="font-bold text-3xl md:text-4xl lg:text-4xl mb-2">Creado para ti y tu familia</h1>
        </div>
      </div>
      <div className="w-full bg-gray-200 form__line my-8 lg:hidden"></div>
      <p className="font-medium text-xl lg:text-base text-gray-600">Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.</p>
    </div>
  )
}
