"use client";

import { useHeaderTitle } from "./hooks";
import "./styles/index.scss";

export const HeaderTitle = () => {
  const { getUser } = useHeaderTitle();

  return (
    <div className="lg:text-center mt-8 lg:mt-12 header__title mx-auto mb-8 text-start">
      <h1 className="text-2xl lg:text-4xl font-medium">{getUser()} ¿Para quién deseas cotizar?</h1>
      <p className="text-medium mt-2 text-c-neutral-600">Selecciona la opción que se ajuste más a tus necesidades.</p>
    </div>
  )
}
