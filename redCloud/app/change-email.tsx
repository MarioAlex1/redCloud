import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { changeEmailStyles } from "../styles/changeEmailStyles";

export default function ChangeEmail() {
    const [currentEmail, setCurrentEmail] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleChange = () => {
        if (!currentEmail || !newEmail) {
            setMessage("Preencha todos os campos.");
            return;
        }

        if (!newEmail.includes("@") || !newEmail.includes(".")) {
            setMessage("Digite um email válido.");
            return;
        }

        setMessage("Email atualizado com sucesso!");
    };

    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />

            <View style={changeEmailStyles.container}>
                
                <Text style={changeEmailStyles.title}>Mudar Email</Text>

                <Text style={changeEmailStyles.label}>Email atual</Text>
                <TextInput
                    value={currentEmail}
                    onChangeText={setCurrentEmail}
                    placeholder="Digite seu email atual"
                    placeholderTextColor="gray"
                    style={changeEmailStyles.input}
                />

                <Text style={changeEmailStyles.label}>Novo email</Text>
                <TextInput
                    value={newEmail}
                    onChangeText={setNewEmail}
                    placeholder="Digite o novo email"
                    placeholderTextColor="gray"
                    style={changeEmailStyles.input}
                />

                {message !== "" && (
                    <Text style={changeEmailStyles.message}>{message}</Text>
                )}

                <TouchableOpacity
                    onPress={handleChange}
                    style={changeEmailStyles.saveButton}
                >
                    <Text style={changeEmailStyles.saveButtonText}>Salvar</Text>
                </TouchableOpacity>

                <Link href="/user" asChild>
                    <TouchableOpacity style={changeEmailStyles.backButton}>
                        <Feather name="arrow-left" size={22} color="#fff" />
                        <Text style={changeEmailStyles.backText}>Voltar</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </>
    );
}