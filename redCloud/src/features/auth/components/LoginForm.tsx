import { useMemo } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import Checkbox from "expo-checkbox";
import { Link } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { makeLoginStyles } from "../screens/LoginScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";
import SocialButtons from "../../../shared/components/SocialButton";
import { useLogin } from "../hooks/useLogin";

// Formulário de login com email, senha, lembrar-me e botão de entrar
export default function LoginForm() {
  const { colors } = useTheme();
  const loginStyles = useMemo(() => makeLoginStyles(colors), [colors]);
  const {
    email, setEmail,
    password, setPassword,
    showPassword, setShowPassword,
    checked, setChecked,
    loading, errorMsg,
    handleLogin,
  } = useLogin();

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

      <View style={[loginStyles.input, { flexDirection: "row", alignItems: "center", padding: 0, paddingHorizontal: 18 }]}>
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

      <View style={loginStyles.registerRow}>
        <Text style={loginStyles.registerText}>Não tem uma conta? </Text>
        <Link href="/register" style={loginStyles.registerLink}>
          Registre-se
        </Link>
      </View>
    </>
  );
}