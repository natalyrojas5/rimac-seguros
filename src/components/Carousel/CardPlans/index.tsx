"use client";

import { Carousel } from 'primereact/carousel';
import "./styles/index.scss";

import { CardPlan } from "@/components";
import { responsiveOptions } from "./helpers/response";
import { useCarouselCardPlans } from "./hooks";

export const CarouselCardPlans = () => {
  const { plans, hasCurrentPlan, hasPlans, mQuery } = useCarouselCardPlans()

  return (
    <section className="mt-8 ">
      {hasPlans && hasCurrentPlan &&
        <Carousel
          orientation={mQuery.matches ? "vertical" : "horizontal"}
          verticalViewPortHeight="760px"
          responsiveOptions={responsiveOptions}
          value={plans}
          numVisible={mQuery.matches ? 1 : 3}
          itemTemplate={CardPlan}
        />
      }
    </section>
  )
}
