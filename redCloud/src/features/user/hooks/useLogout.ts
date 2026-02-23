import { useState, useEffect } from "react";
import { router } from "expo-router";

import * as authService from "../../../services/authServices";
import * as authStorage from "../../../storage/authStorage";

// Verifica se o usuário está logado e gerencia o fluxo de logout
export function useLogout() {
  const [showModal, setShowModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Verifica no storage se há usuário logado ao montar o componente
  useEffect(() => {
    authStorage.getUser().then((user) => setIsLoggedIn(!!user));
  }, []);

  // Faz logout no Firebase, limpa o storage e redireciona para login
  const handleLogout = async () => {
    try {
      await authService.logout();
      await authStorage.removeUser();
      setShowModal(false);
      router.replace("/login");
    } catch {
      setShowModal(false);
    }
  };

  return { showModal, setShowModal, isLoggedIn, handleLogout };
}
