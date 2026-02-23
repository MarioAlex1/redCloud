import { useState } from "react";
import { router } from "expo-router";

import * as authStorage from "../../../storage/authStorage";
import * as authService from "../../../services/authServices";
import { getFirebaseErrorMessage } from "../../../services/firebaseErrors";

// Gerencia o estado e a lógica de autenticação do formulário de login
export function useLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Valida os campos, faz login no Firebase, salva localmente e redireciona
  const handleLogin = async () => {
    setErrorMsg("");
    if (!email || !password) {
      setErrorMsg("Preencha email e senha.");
      return;
    }

    setLoading(true);

    try {
      const user = await authService.login(email, password);
      await authStorage.saveUser(user);
      if (user.displayName) {
        await authStorage.saveNick(user.displayName);
      }
      router.replace("/home");
    } catch (error: any) {
      setErrorMsg(getFirebaseErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    setShowPassword,
    checked,
    setChecked,
    loading,
    errorMsg,
    handleLogin,
  };
}
