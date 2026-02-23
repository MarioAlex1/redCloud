import { useMemo } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import Checkbox from "expo-checkbox";
import { MaterialIcons } from "@expo/vector-icons";
import { makeRegisterStyles } from "../screens/RegisterScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";
import SocialButtons from "../../../shared/components/SocialButton";
import { Link } from "expo-router";
import { useRegister } from "../hooks/useRegister";

// Formulário de registro com nick, email, senha e botão de criar conta
export default function RegisterForm() {
  const { colors } = useTheme();
  const registerStyles = useMemo(() => makeRegisterStyles(colors), [colors]);
  const {
    nick, setNick,
    email, setEmail,
    password, setPassword,
    confirmPassword, setConfirmPassword,
    showPassword, setShowPassword,
    showConfirmPassword, setShowConfirmPassword,
    checked, setChecked,
    loading, errorMsg,
    handleRegister,
  } = useRegister();

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

      <View style={[registerStyles.input, { flexDirection: "row", alignItems: "center", padding: 0, paddingHorizontal: 18 }]}>
        <TextInput
          placeholder="Senha"
          placeholderTextColor="#777"
          secureTextEntry={!showPassword}
          style={{ flex: 1, fontSize: 16, paddingVertical: 18, color: "#333" }}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(v => !v)}>
          <MaterialIcons name={showPassword ? "visibility-off" : "visibility"} size={22} color="#777" />
        </TouchableOpacity>
      </View>

      <View style={[registerStyles.input, { flexDirection: "row", alignItems: "center", padding: 0, paddingHorizontal: 18 }]}>
        <TextInput
          placeholder="Confirmar Senha"
          placeholderTextColor="#777"
          secureTextEntry={!showConfirmPassword}
          style={{ flex: 1, fontSize: 16, paddingVertical: 18, color: "#333" }}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity onPress={() => setShowConfirmPassword(v => !v)}>
          <MaterialIcons name={showConfirmPassword ? "visibility-off" : "visibility"} size={22} color="#777" />
        </TouchableOpacity>
      </View>

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

      <View style={registerStyles.loginRow}>
        <Text style={registerStyles.loginText}>Já tem uma conta? </Text>
        <Link href="/login" style={registerStyles.loginLink}>
          Faça Login
        </Link>
      </View>
    </>
  );
}