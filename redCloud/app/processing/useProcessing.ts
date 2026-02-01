import { useEffect } from "react";
import { router } from "expo-router";

export function useProcessing() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace("/succes");
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);
}