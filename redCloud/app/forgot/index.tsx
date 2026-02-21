import { View } from "react-native";
import { Stack } from "expo-router";
import { useState, useMemo } from "react";

import { makeForgotStyles } from "../../src/styles/forgot.styles";
import { useTheme } from "../../src/theme/ThemeContext";

import ForgotHeader from "./ForgotHeader";
import ForgotForm from "./ForgotForm";
import ForgotActions from "./ForgotActions";

export default function ForgotPasswordPage() {
    const { colors } = useTheme();
    const forgotStyles = useMemo(() => makeForgotStyles(colors), [colors]);
    const [email, setEmail] = useState("");

    const handleSend = () => {
        // futura lógica de API
        console.log("Enviar link para:", email);
    };

    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />

            <View style={forgotStyles.container}>
                <View style={forgotStyles.card}>
                    <ForgotHeader />

                    <ForgotForm
                        email={email}
                        onChangeEmail={setEmail}
                    />

                    <ForgotActions onSend={handleSend} />
                </View>
            </View>
        </>
    );
}