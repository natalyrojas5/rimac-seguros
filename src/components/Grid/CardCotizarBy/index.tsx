
import { CardCotizarBy } from "@/components";
import { cotizarBy } from "@/data";

export const GridCardCotizarBy = () => {
  return (
    <section className="flex items-center gap-5 justify-center flex-col lg:flex-row">
      {cotizarBy.map((card, i) => <CardCotizarBy key={i} {...card} />)}
    </section>
  )
}
