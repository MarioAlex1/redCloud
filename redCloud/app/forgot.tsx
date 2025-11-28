import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { forgotStyles } from "../styles/forgotStyles";

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");

    return (
        <View style={forgotStyles.container}>
            
            <View style={forgotStyles.card}>
                
                <Text style={forgotStyles.title}>Recuperar senha</Text>

                <Text style={forgotStyles.subtitle}>
                    Digite seu e-mail para enviarmos o link de redefinição
                </Text>

                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Seu email"
                    placeholderTextColor="#777"
                    keyboardType="email-address"
                    style={forgotStyles.input}
                />

                <TouchableOpacity style={forgotStyles.sendButton}>
                    <Text style={forgotStyles.sendButtonText}>Enviar link</Text>
                </TouchableOpacity>

                <View style={forgotStyles.bottomArea}>
                    <Text style={forgotStyles.bottomText}>Lembrou a senha?</Text>

                    <Link href="/login" style={forgotStyles.backToLoginText}>
                        Voltar para Login
                    </Link>
                </View>
            </View>

        </View>
    );
}