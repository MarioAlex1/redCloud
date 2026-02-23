import { Text } from "react-native";
import { makeChangeEmailStyles } from "../screens/ChangeEmailScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";
import { useMemo } from "react";

// Título e subtítulo da tela de troca de email
export default function ChangeEmailHeader() {
    const { colors } = useTheme();
    const s = useMemo(() => makeChangeEmailStyles(colors), [colors]);
    return (
        <>
            <Text style={s.title}>Mudar Email</Text>
            <Text style={s.subtitle}>Informe seu email atual e o novo endereço que deseja usar.</Text>
        </>
    );
}
