import { useState, useMemo } from "react";
import { View, TextInput, TouchableOpacity, Text, Alert } from "react-native";
import Checkbox from "expo-checkbox";
import { Link, router } from "expo-router";
import { makeLoginStyles } from "../screens/LoginScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";
import SocialButtons from "../../../shared/components/SocialButton";

import * as authStorage from '../../../storage/authStorage';
import * as authService from '../../../services/authServices';

export default function LoginForm() {
  const { colors } = useTheme();
  const loginStyles = useMemo(() => makeLoginStyles(colors), [colors]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Preencha email e senha');
      return;
    }

    setLoading(true);

    try {
      // Faz login no Firebase
      const user = await authService.login(email, password);

      // Salva localmente no AsyncStorage
      await authStorage.saveUser(user);

      // Redireciona para home
      router.push("/home");
    } catch (error: any) {
      console.log('Erro no login:', error);
      Alert.alert('Erro', error.message || 'Falha no login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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