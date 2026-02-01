import { View } from "react-native";
import { Stack } from "expo-router";
import { useState } from "react";

import { forgotStyles } from "../../src/styles/forgot.styles";

import ForgotHeader from "./ForgotHeader";
import ForgotForm from "./ForgotForm";
import ForgotActions from "./ForgotActions";

export default function ForgotPasswordPage() {
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