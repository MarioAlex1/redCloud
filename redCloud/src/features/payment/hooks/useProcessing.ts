import { useEffect } from "react";
import { router } from "expo-router";

export function useProcessing() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace("/success");
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);
}