import { usePathname } from "next/navigation";

export const useSteps = () => {
  const path = usePathname();
  const isResumen = path.includes("resumen");
  
  return { isResumen };
};
