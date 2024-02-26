"use client";

import { GoBack, Steps, CardResumen, Button } from "@/components";
import { LayoutPrivate } from '@/layouts/Private/';
import { useResumen } from "./hooks";

export const ViewResumen = () => {
  const { resetContext } = useResumen()
  return (
    <LayoutPrivate>
      <Steps />
      <GoBack />
      <div className="container-cus py-5  px-4 lg:px-16 mb-8">
        <h1 className="text-4xl font-semibold mb-8">Resumen del seguro </h1>
        <CardResumen />
        <Button
          type="button"
          text="Volver a Cotizar"
          btnStyle="button"
          className="mt-4"
          onClick={resetContext}
        />
      </div>
    </LayoutPrivate>
  )
}
