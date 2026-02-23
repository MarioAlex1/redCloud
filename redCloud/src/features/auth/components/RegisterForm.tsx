import { useState, useMemo } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import Checkbox from "expo-checkbox";
import { router } from "expo-router";
import { makeRegisterStyles } from "../screens/RegisterScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";
import SocialButtons from "../../../shared/components/SocialButton";

import * as authStorage from '../../../storage/authStorage';
import * as authService from '../../../services/authServices';
import { getFirebaseErrorMessage } from '../../../services/firebaseErrors';

export default function RegisterForm() {
  const { colors } = useTheme();
  const registerStyles = useMemo(() => makeRegisterStyles(colors), [colors]);
  const [nick, setNick] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleRegister = async () => {
    setErrorMsg('');
    if (!nick || !email || !password || !confirmPassword) {
      setErrorMsg('Preencha todos os campos.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMsg('As senhas não conferem.');
      return;
    }

    setLoading(true);

    try {
      // Cria usuário no Firebase Auth
      const user = await authService.register(email, password);

      // Salva localmente no AsyncStorage
      await authStorage.saveUser(user);
      await authStorage.saveNick(nick);

      // Redireciona pra home
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
        <View style={registerStyles.errorBox}>
          <Text style={registerStyles.errorText}>{errorMsg}</Text>
        </View>
      )}

      <TextInput
        placeholder="Nickname"
        placeholderTextColor="#777"
        style={registerStyles.input}
        value={nick}
        onChangeText={setNick}
      />

      <TextInput
        placeholder="Email"
        placeholderTextColor="#777"
        style={registerStyles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Senha"
        placeholderTextColor="#777"
        secureTextEntry
        style={registerStyles.input}
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        placeholder="Confirmar Senha"
        placeholderTextColor="#777"
        secureTextEntry
        style={registerStyles.input}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <View style={registerStyles.checkboxRow}>
        <Checkbox
          value={checked}
          onValueChange={setChecked}
          color={checked ? "#000" : undefined}
          style={registerStyles.checkbox}
        />
        <Text style={registerStyles.checkboxLabel}>Lembrar-me</Text>
      </View>

      <TouchableOpacity
        style={registerStyles.buttonCreate}
        onPress={handleRegister}
        disabled={loading}
      >
        <Text style={registerStyles.buttonText}>
          {loading ? 'Carregando...' : 'Criar Conta'}
        </Text>
      </TouchableOpacity>

      <SocialButtons message="Ou cadastre-se com"/>
    </>
  );
}