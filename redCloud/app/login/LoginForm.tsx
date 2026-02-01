import { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import Checkbox from "expo-checkbox";
import { Link, router } from "expo-router";
import { loginStyles } from "../../src/styles/login.styles";
import SocialButtons from "../../src/components/SocialButton";

export default function LoginForm() {
    const [checked, setChecked] = useState(false);

    function handleLogin() {
        // futuramente: validação + API + loading
        router.push("/home");
    }

    return (
        <>
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

            <TouchableOpacity
                style={loginStyles.buttonCreate}
                onPress={handleLogin}
            >
                <Text style={loginStyles.buttonText}>Login</Text>
            </TouchableOpacity>

            <SocialButtons message="Ou continue com"/>
        </>
    );
}
