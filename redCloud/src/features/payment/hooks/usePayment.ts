import { useState } from "react";
import { router } from "expo-router";

export function usePayment() {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [giftCode, setGiftCode] = useState("");

  const methods = [
    { id: "google", label: "Google Play", icon: "google" },
    { id: "cartao", label: "Cartão", icon: "cartao" },
    { id: "pix", label: "Pix", icon: "pix" },
  ];

  function handlePay() {
    if (!selectedMethod) return;
    router.push("/processing");
  }

  return {
    selectedMethod,
    setSelectedMethod,
    giftCode,
    setGiftCode,
    methods,
    handlePay,
  };
}