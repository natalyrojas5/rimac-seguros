import { useRouter } from "next/navigation"

export const useError = () => {
  const router = useRouter();

  const goToHome = () =>{
    router.push("/")
  }
  return {goToHome}
}
