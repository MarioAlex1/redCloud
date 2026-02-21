import { Text } from "react-native";
import { makeRegisterStyles } from "../screens/RegisterScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";
import { useMemo } from "react";

export default function RegisterHeader() {
    const { colors } = useTheme();
    const registerStyles = useMemo(() => makeRegisterStyles(colors), [colors]);
    return (
        <>
            <Text style={registerStyles.tittle}>Registre-se</Text>
            <Text style={registerStyles.subtittle}>Crie sua conta</Text>
        </>
    );
}