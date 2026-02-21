import { Text } from "react-native";
import { makeLoginStyles } from "../../src/styles/login.styles";
import { useTheme } from "../../src/theme/ThemeContext";
import { useMemo } from "react";

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