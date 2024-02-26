
import { Modal } from "@/components"
import { modals } from "@/data"
import { LayoutProps } from "../interface";

export const LayoutPublic = ({ children }: LayoutProps) => {

  return (
    <>
      <main>
        {children}
      </main>
      <Modal
        title={modals.buy.title}
        description={modals.buy.description}

      />
      <Modal
        title={modals.terms.title}
        description={modals.terms.description}
      />
    </>
  )
}
