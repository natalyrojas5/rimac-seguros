"use client";

import Image from "next/image";
import "./styles/index.scss";

import { LayoutPublic } from "@/layouts";
import { Form } from "@/components";
import { imgFamily } from "@/assets/images";


export const ViewHome = () => {

  return (
    <LayoutPublic>
      <section className="container-cus viewHome">
        <Image
          src={imgFamily}
          width={480}
          height={560}
          alt="Familia"
          className="hidden lg:block w-full"
        />
        <Form />
      </section>
    </LayoutPublic>
  )
}
