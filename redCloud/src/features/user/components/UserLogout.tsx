import { TouchableOpacity, Text, View, Modal } from "react-native";
import { router } from "expo-router";
import { makeUserStyles } from "../screens/UserScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";
import { useMemo, useState, useEffect } from "react";

import * as authService from "../../../services/authServices";
import * as authStorage from "../../../storage/authStorage";

export default function UserLogout() {
  const { colors } = useTheme();
  const UserStyles = useMemo(() => makeUserStyles(colors), [colors]);
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

  if (!isLoggedIn) {
    return (
      <TouchableOpacity
        style={UserStyles.logoutButton}
        onPress={() => router.replace("/login")}
      >
        <Text style={UserStyles.logoutButtonText}>Faça Login</Text>
      </TouchableOpacity>
    );
  }

  return (
    <>
      <TouchableOpacity
        style={UserStyles.logoutButton}
        onPress={() => setShowModal(true)}
      >
        <Text style={UserStyles.logoutButtonText}>Sair</Text>
      </TouchableOpacity>

      <Modal
        transparent
        visible={showModal}
        animationType="fade"
        onRequestClose={() => setShowModal(false)}
      >
        <View style={UserStyles.modalOverlay}>
          <View style={UserStyles.modalCard}>
            <Text style={UserStyles.modalTitle}>Sair da conta?</Text>
            <Text style={UserStyles.modalSubtitle}>
              Tem certeza que você quer sair da sua conta?
            </Text>

            <View style={UserStyles.modalButtons}>
              <TouchableOpacity
                style={UserStyles.modalButtonCancel}
                onPress={() => setShowModal(false)}
              >
                <Text style={UserStyles.modalButtonCancelText}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={UserStyles.modalButtonConfirm}
                onPress={handleLogout}
              >
                <Text style={UserStyles.modalButtonConfirmText}>Sair</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}
