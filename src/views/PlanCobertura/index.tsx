"use client";

import { useEffect } from "react";
import { GoBack, GridCardCotizarBy, HeaderTitle, Steps, CarouselCardPlans } from "@/components";
import { usePlans } from "./hooks";
import { LayoutPrivate } from '@/layouts/Private/index';


export const ViewPlanCobertura = () => {
  const { getPlans } = usePlans();

  useEffect(() => {
    getPlans()
  }, [])


  return (
    <LayoutPrivate>
      <Steps />
      <GoBack />
      <div className="container-cus">
        <HeaderTitle />
        <GridCardCotizarBy />
        <CarouselCardPlans />
      </div>
    </LayoutPrivate>
  )
}
