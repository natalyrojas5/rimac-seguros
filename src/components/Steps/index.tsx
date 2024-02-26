"use client";

import { useGoBack } from "../Goback/hooks";
import { useSteps } from "./hooks";

export const Steps = () => {
  const { isResumen } = useSteps();
  const { goBack } = useGoBack()

  return (
    <header className="bg-c-neutral-100 p-4 border-b-2 lg:border-b-0 border-gray-200">
      <div className="container-cus  gap-8 justify-center hidden lg:flex">
        <div className="flex gap-4 items-center">
          <div
            className={`${isResumen ? "text-c-neutral-300 border-2 border-c-neutral-300" : "bg-c-blue-berry text-white  border-2 border-c-blue-berry"} rounded-full w-8 h-8 flex items-center justify-center `}>1</div>
          <p className={`font-medium text-md ${isResumen ? "text-c-neutral-300" : "text-c-primary"}`}>Planes y coberturas</p>
          <div className="flex gap-1">
            {[1, 2, 3, 4].map(n =>
              <div key={n} className={`${isResumen ? "bg-c-neutral-300" : "bg-c-blue-berry"} w-1.5 h-1 rounded-sm`}></div>
            )}

          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div
            className={`${isResumen ? "bg-c-blue-berry text-white  border-2 border-c-blue-berry" : "border-2 border-c-neutral-300 text-c-neutral-300"}
          rounded-full w-8 h-8 flex items-center justify-center `}>2</div>
          <p className={`${isResumen ? "text-gray-800" : "text-c-neutral-300"} font-semibold text-md`}>Resumen</p>
        </div>
      </div>
      <div className="flex lg:hidden gap-3 items-center">
        <button
          className="border-c-neutral-400 text-c-neutral-400 border-2 p-2 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
          onClick={goBack}>
          {"<"}
        </button>
        <p className="uppercase text-gray-700 font-semibold text-sm block w-48">Paso {isResumen ? "2" : "1"} de 2</p>
        <div className="bg-c-neutral-500 h-4 rounded-md w-full">
          <div className={`bg-c-blue-berry h-4 rounded-md ${isResumen ? "w-full" : "w-1/12"}`}></div>
        </div>
      </div>
    </header>
  )
}
