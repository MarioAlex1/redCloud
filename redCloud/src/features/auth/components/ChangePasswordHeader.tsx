import { Text } from "react-native";
import { makeChangePasswordStyles } from "../screens/ChangePasswordScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";
import { useMemo } from "react";

// Título e subtítulo da tela de troca de senha
export default function ChangePasswordHeader() {
    const { colors } = useTheme();
    const s = useMemo(() => makeChangePasswordStyles(colors), [colors]);
    return (
        <>
            <Text style={s.title}>Mudar Senha</Text>
            <Text style={s.subtitle}>Escolha uma senha forte com pelo menos 6 caracteres.</Text>
        </>
    );
}
