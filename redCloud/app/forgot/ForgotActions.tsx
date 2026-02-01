import { View, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { forgotStyles } from "../../src/styles/forgot.styles";

export default function ForgotActions({
    onSend,
}: {
    onSend: () => void;
}) {
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

                <Link href="/login" style={forgotStyles.backToLoginText}>
                    Voltar para Login
                </Link>
            </View>
        </>
    );
}