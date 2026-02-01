import { Text } from "react-native";
import { forgotStyles } from "../../src/styles/forgot.styles";

export default function ForgotHeader() {
    return (
        <>
            <Text style={forgotStyles.title}>Recuperar senha</Text>

            <Text style={forgotStyles.subtitle}>
                Digite seu e-mail para enviarmos o link de redefinição
            </Text>
        </>
    );
}