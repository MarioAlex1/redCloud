import { View, ScrollView } from "react-native";
import { Stack } from "expo-router";
import { useTheme } from "../../../theme/ThemeContext";
import { useState, useMemo } from "react";

import ChangePasswordHeader from "../components/ChangePasswordHeader";
import ChangePasswordForm from "../components/ChangePasswordForm";
import ChangePasswordActions from "../components/ChangePasswordActions";

export default function ChangePasswordPage() {
    const { colors } = useTheme();
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleChange = () => {
        if (!currentPassword || !newPassword || !confirmPassword) {
            setMessage("Preencha todos os campos.");
            return;
        }

        if (newPassword.length < 6) {
            setMessage("A nova senha precisa ter pelo menos 6 caracteres.");
            return;
        }

        if (newPassword !== confirmPassword) {
            setMessage("As senhas não coincidem.");
            return;
        }

        setMessage("Senha atualizada com sucesso!");
    };

    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />

            <View style={{ flex: 1, backgroundColor: colors.bg }}>
                <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
                    <ChangePasswordHeader />

                    <ChangePasswordForm
                        currentPassword={currentPassword}
                        newPassword={newPassword}
                        confirmPassword={confirmPassword}
                        message={message}
                        onChangeCurrent={setCurrentPassword}
                        onChangeNew={setNewPassword}
                        onChangeConfirm={setConfirmPassword}
                    />

                    <ChangePasswordActions onSave={handleChange} />
                </ScrollView>
            </View>
        </>
    );
}