import { View } from "react-native";
import { Stack } from "expo-router";
import { useState, useMemo } from "react";

import { makeForgotStyles } from "./ForgotScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";

import ForgotHeader from "../components/ForgotHeader";
import ForgotForm from "../components/ForgotForm";
import ForgotActions from "../components/ForgotActions";

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