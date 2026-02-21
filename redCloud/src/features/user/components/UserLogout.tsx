import { TouchableOpacity, Text, Alert } from "react-native";
import { router } from "expo-router";
import { makeUserStyles } from "../screens/UserScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";
import { useMemo } from "react";

import * as authService from "../../../services/authServices";
import * as authStorage from "../../../storage/authStorage";

export default function UserLogout() {
  const { colors } = useTheme();
  const UserStyles = useMemo(() => makeUserStyles(colors), [colors]);
  const handleLogout = async () => {
    try {
      await authService.logout();      // Firebase Auth
      await authStorage.removeUser();  // AsyncStorage local
      router.replace("/login");        // Volta para login
    } catch {
      Alert.alert("Erro", "Falha ao sair da conta");
    }
  };

  return (
    <TouchableOpacity
      style={UserStyles.logoutButton}
      onPress={handleLogout}
    >
      <Text style={UserStyles.logoutButtonText}>Sair</Text>
    </TouchableOpacity>
  );
}