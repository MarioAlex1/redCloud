import { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, Alert } from "react-native";
import Checkbox from "expo-checkbox";
import { router } from "expo-router";
import { registerStyles } from "../../src/styles/register.styles";
import SocialButtons from "../../src/components/SocialButton";

import * as authStorage from '../../src/storage/authStorage';
import * as authService from '../../src/services/authServices';

export default function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Erro', 'Senhas não conferem');
      return;
    }

    setLoading(true);

    try {
      // Cria usuário no Firebase Auth
      const user = await authService.register(email, password);

      // Salva localmente no AsyncStorage
      await authStorage.saveUser(user);

      // Redireciona pra home
      router.push("/home");
    } catch (error: any) {
      console.log('Erro no registro:', error);
      Alert.alert('Erro', error.message || 'Falha ao criar conta');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <TextInput
        placeholder="Email ou nome de usuário"
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