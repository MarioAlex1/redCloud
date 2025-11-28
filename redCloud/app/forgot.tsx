import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { forgotStyles } from "../styles/forgotStyles";

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");

    return (
        <ImageBackground
            source={require("../assets/images/fundoLoginRegister.png")}
            style={forgotStyles.background}
            resizeMode="cover"
        >
            <View style={forgotStyles.card}>

                <Text style={forgotStyles.title}>Recuperar senha</Text>

                <Text style={forgotStyles.subtitle}>
                    Digite seu e-mail para enviarmos o link de redefinição
                </Text>

                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Seu email"
                    placeholderTextColor="#999"
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
        </ImageBackground>
    );
}