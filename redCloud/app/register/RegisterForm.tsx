import { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import Checkbox from "expo-checkbox";
import { Link, router } from "expo-router";
import { registerStyles } from "../../src/styles/register.styles";
import SocialButtons from "../../src/components/SocialButton";

export default function RegisterForm() {
    const [checked, setChecked] = useState(false);

    function handleRegister() {
        // futuramente: validação + backend
        router.push("/home");
    }

    return (
        <>
            <TextInput
                placeholder="Email ou nome de usuário"
                placeholderTextColor="#777"
                style={registerStyles.input}
            />

            <TextInput
                placeholder="Senha"
                placeholderTextColor="#777"
                secureTextEntry
                style={registerStyles.input}
            />

            <TextInput
                placeholder="Confirmar Senha"
                placeholderTextColor="#777"
                secureTextEntry
                style={registerStyles.input}
            />

            <View style={registerStyles.checkboxRow}>
                <Checkbox
                    value={checked}
                    onValueChange={setChecked}
                    color={checked ? "#000" : undefined}
                    style={registerStyles.checkbox}
                />
                <Text style={registerStyles.checkboxLabel}>Lembrar-me</Text>
            </View>

            <TouchableOpacity
                style={registerStyles.buttonCreate}
                onPress={handleRegister}
            >
                <Text style={registerStyles.buttonText}>Criar Conta</Text>
            </TouchableOpacity>

            <SocialButtons message="Ou cadastre-se com"/>
        </>
    );
}