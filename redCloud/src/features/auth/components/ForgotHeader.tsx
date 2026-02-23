import { Text } from "react-native";
import { makeForgotStyles } from "../screens/ForgotScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";
import { useMemo } from "react";

// Título e subtítulo da tela de recuperação de senha
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