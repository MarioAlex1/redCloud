import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { makeForgotStyles } from "../screens/ForgotScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";
import { useMemo } from "react";

export default function ForgotActions({
    onSend,
}: {
    onSend: () => void;
}) {
    const { colors } = useTheme();
    const forgotStyles = useMemo(() => makeForgotStyles(colors), [colors]);
    return (
        <>
            <TouchableOpacity
                style={forgotStyles.sendButton}
                onPress={onSend}
            >
                <Text style={forgotStyles.sendButtonText}>
                    Enviar link
                </Text>
            </TouchableOpacity>

            <View style={forgotStyles.bottomArea}>
                <Text style={forgotStyles.bottomText}>
                    Lembrou a senha?
                </Text>

                <TouchableOpacity onPress={() => router.back()}>
                    <Text style={forgotStyles.backToLoginText}>
                        Voltar para Login
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    );
}