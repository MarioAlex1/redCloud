import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { changePasswordStyles } from "../styles/changePasswordStyles";

export default function ChangePassword() {
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

        // futura lógica de API
        setMessage("Senha atualizada com sucesso!");
    };

    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />

            <View style={changePasswordStyles.container}>

                <Text style={changePasswordStyles.title}>Mudar Senha</Text>

                <Text style={changePasswordStyles.label}>Senha atual</Text>
                <TextInput
                    secureTextEntry
                    value={currentPassword}
                    onChangeText={setCurrentPassword}
                    placeholder="Digite sua senha atual"
                    placeholderTextColor="gray"
                    style={changePasswordStyles.input}
                />

                <Text style={changePasswordStyles.label}>Nova senha</Text>
                <TextInput
                    secureTextEntry
                    value={newPassword}
                    onChangeText={setNewPassword}
                    placeholder="Digite a nova senha"
                    placeholderTextColor="gray"
                    style={changePasswordStyles.input}
                />

                <Text style={changePasswordStyles.label}>Confirmar nova senha</Text>
                <TextInput
                    secureTextEntry
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    placeholder="Repita a nova senha"
                    placeholderTextColor="gray"
                    style={changePasswordStyles.input}
                />

                {message !== "" && (
                    <Text style={changePasswordStyles.message}>{message}</Text>
                )}

                <TouchableOpacity
                    onPress={handleChange}
                    style={changePasswordStyles.saveButton}
                >
                    <Text style={changePasswordStyles.saveButtonText}>Salvar</Text>
                </TouchableOpacity>

                <Link href="/user" asChild>
                    <TouchableOpacity style={changePasswordStyles.backButton}>
                        <Feather name="arrow-left" size={22} color="#fff" />
                        <Text style={changePasswordStyles.backText}>Voltar</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </>
    );
}