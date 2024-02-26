"use client";

import { useGoBack } from "./hooks";

export const GoBack = () => {
  const { goBack } = useGoBack();

  return (
    <div className="container-cus py-4 px-16 hidden lg:block cursor-pointer" onClick={goBack}>
      <div className="text-c-blue-berry flex items-center gap-3 font-semibold cursor-pointer">
        <div className="border-c-blue-berry border-2 p-2 rounded-full w-8 h-8 flex items-center justify-center">
          {"<"}
        </div>
        <p className="text-md" >Volver</p>
      </div>
    </div>
  )
}
