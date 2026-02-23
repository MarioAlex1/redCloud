import { useEffect } from "react";
import { router } from "expo-router";

export function useProcessing() {
  // Redireciona para a tela de sucesso após 2,5 segundos simulando o processamento
  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace("/success");
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);
}