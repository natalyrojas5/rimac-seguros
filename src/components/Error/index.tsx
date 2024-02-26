import { useError } from "./hooks";
import { Button } from "../"

export const Error = () => {
  const { goToHome } = useError();
  return (
    <section className="container-cus p-8 ">
      <aside className="bg-white shadow-card p-6 m-6 rounded-2xl border-2 border-gray-900">
        <h2 className="text-5xl font-bold mb-2">Error</h2>
        <p className="text-gray-500 text-lg mb-4">Por favor ingrese un usuario para realizar la cotización</p>
        <Button text="Ir a Cotizar" type="button" btnStyle="button" onClick={goToHome} />
      </aside>
    </section>
  )
}
