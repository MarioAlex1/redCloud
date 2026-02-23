import { TouchableOpacity, Text, View, Modal } from "react-native";
import { router } from "expo-router";
import { makeUserStyles } from "../screens/UserScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";
import { useMemo } from "react";
import { useLogout } from "../hooks/useLogout";

export default function UserLogout() {
  const { colors } = useTheme();
  const UserStyles = useMemo(() => makeUserStyles(colors), [colors]);
  const { showModal, setShowModal, isLoggedIn, handleLogout } = useLogout();

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
