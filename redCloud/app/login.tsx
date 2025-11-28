import React, { useState } from "react";
import { ImageBackground, View, TextInput, TouchableOpacity, Text } from "react-native";
import { Link, router } from "expo-router";
import { loginStyles } from "../styles/loginStyles";
import Checkbox from "expo-checkbox";
import { AntDesign } from "@expo/vector-icons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function LoginPage() {
    const [checked, setChecked] = useState(false);

    function handleLogin() {
        // aqui futuramente você coloca validação, chamada ao backend, loading, etc
        router.push("/home");
    }

    return (
        <>
            <ImageBackground
                source={require("../assets/images/fundoLoginRegister.png")}
                style={loginStyles.background}
                resizeMode="cover"
            >
                <View style={loginStyles.topCard}>
                    <Text style={loginStyles.tittle}>Bem-vindo de volta!</Text>

                    <Text style={loginStyles.subtittle}>Entre com sua conta</Text>

                    <TextInput
                        placeholder="Email ou nome de usuário"
                        placeholderTextColor="#777"
                        style={loginStyles.input}
                    />

                    <TextInput
                        placeholder="Senha"
                        placeholderTextColor="#777"
                        secureTextEntry
                        style={loginStyles.input}
                    />

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

                    <TouchableOpacity style={loginStyles.buttonCreate} onPress={handleLogin}>
                        <Text style={loginStyles.buttonText}>Login</Text>
                    </TouchableOpacity>

                    <Text style={loginStyles.menseger}>Não tem uma conta? Cadastre-se aqui</Text>

                    <Text style={loginStyles.mensegerContinue}>Ou continue com</Text>

                    <View style={loginStyles.socialButtons}>
                        <TouchableOpacity style={loginStyles.socialButton}>
                            <FontAwesome5 name="facebook" size={50} color="black" />
                        </TouchableOpacity>

                        <TouchableOpacity style={loginStyles.socialButton}>
                            <AntDesign name="google" size={50} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </>
    );
}