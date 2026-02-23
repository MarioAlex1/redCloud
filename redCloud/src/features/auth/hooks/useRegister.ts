import { useState } from "react";
import { router } from "expo-router";

import * as authStorage from "../../../storage/authStorage";
import * as authService from "../../../services/authServices";
import { getFirebaseErrorMessage } from "../../../services/firebaseErrors";

// Gerencia o estado e a lógica de criação de conta do formulário de registro
export function useRegister() {
  const [nick, setNick] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Valida os campos, cria a conta no Firebase, salva localmente e redireciona
  const handleRegister = async () => {
    setErrorMsg("");
    if (!nick || !email || !password || !confirmPassword) {
      setErrorMsg("Preencha todos os campos.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMsg("As senhas não conferem.");
      return;
    }

    setLoading(true);

    try {
      const user = await authService.register(email, password, nick);
      await authStorage.saveUser(user);
      await authStorage.saveNick(nick);
      router.replace("/home");
    } catch (error: any) {
      setErrorMsg(getFirebaseErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  return {
    nick,
    setNick,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    checked,
    setChecked,
    loading,
    errorMsg,
    handleRegister,
  };
}
