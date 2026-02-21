import { Text } from "react-native";
import { makeForgotStyles } from "../../src/styles/forgot.styles";
import { useTheme } from "../../src/theme/ThemeContext";
import { useMemo } from "react";

export default function ForgotHeader() {
    const { colors } = useTheme();
    const forgotStyles = useMemo(() => makeForgotStyles(colors), [colors]);
    return (
        <>
            <Text style={forgotStyles.title}>Recuperar senha</Text>

            <Text style={forgotStyles.subtitle}>
                Digite seu e-mail para enviarmos o link de redefinição
            </Text>
        </>
    );
}