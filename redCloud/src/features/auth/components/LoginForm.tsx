import { useState, useMemo } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import Checkbox from "expo-checkbox";
import { Link, router } from "expo-router";
import { makeLoginStyles } from "../screens/LoginScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";
import SocialButtons from "../../../shared/components/SocialButton";

import * as authStorage from '../../../storage/authStorage';
import * as authService from '../../../services/authServices';
import { getFirebaseErrorMessage } from '../../../services/firebaseErrors';

export default function LoginForm() {
  const { colors } = useTheme();
  const loginStyles = useMemo(() => makeLoginStyles(colors), [colors]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = async () => {
    setErrorMsg('');
    if (!email || !password) {
      setErrorMsg('Preencha email e senha.');
      return;
    }

    setLoading(true);

    try {
      // Faz login no Firebase
      const user = await authService.login(email, password);

      // Salva localmente no AsyncStorage
      await authStorage.saveUser(user);

      // Recupera o nickname salvo no Firebase (displayName) e salva localmente
      if (user.displayName) {
        await authStorage.saveNick(user.displayName);
      }

      // Redireciona para home
      router.replace("/home");
    } catch (error: any) {
      setErrorMsg(getFirebaseErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {errorMsg !== '' && (
        <View style={loginStyles.errorBox}>
          <Text style={loginStyles.errorText}>{errorMsg}</Text>
        </View>
      )}

      <TextInput
        placeholder="Email ou nome de usuário"
        placeholderTextColor="#777"
        style={loginStyles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Senha"
        placeholderTextColor="#777"
        secureTextEntry
        style={loginStyles.input}
        value={password}
        onChangeText={setPassword}
      />

      <View style={loginStyles.checkboxRow}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <Checkbox
            value={checked}
            onValueChange={setChecked}
            color={checked ? "#000" : undefined}
            style={loginStyles.checkbox}
          />
          <Text style={loginStyles.checkboxLabel}>Lembrar-me</Text>
        </View>

        <Link href="/forgot" style={loginStyles.forgotPasswordText}>
          Esqueceu a senha?
        </Link>
      </View>

      <TouchableOpacity
        style={loginStyles.buttonCreate}
        onPress={handleLogin}
        disabled={loading}
      >
        <Text style={loginStyles.buttonText}>{loading ? 'Carregando...' : 'Login'}</Text>
      </TouchableOpacity>

      <SocialButtons message="Ou continue com"/>
    </>
  );
}