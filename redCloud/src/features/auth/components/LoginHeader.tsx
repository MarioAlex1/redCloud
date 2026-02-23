import { Text } from "react-native";
import { makeLoginStyles } from "../screens/LoginScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";
import { useMemo } from "react";

// Título e subtítulo da tela de login
export default function LoginHeader() {
    const { colors } = useTheme();
    const loginStyles = useMemo(() => makeLoginStyles(colors), [colors]);
    return (
        <>
            <Text style={loginStyles.tittle}>Bem-vindo de volta!</Text>
            <Text style={loginStyles.subtittle}>Entre com sua conta</Text>
        </>
    );
}