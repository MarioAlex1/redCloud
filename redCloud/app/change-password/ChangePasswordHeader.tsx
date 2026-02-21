import { Text } from "react-native";
import { makeChangePasswordStyles } from "../../src/styles/change-password.styles";
import { useTheme } from "../../src/theme/ThemeContext";
import { useMemo } from "react";

export default function ChangePasswordHeader() {
    const { colors } = useTheme();
    const ChangePasswordStyles = useMemo(() => makeChangePasswordStyles(colors), [colors]);
    return (
        <Text style={ChangePasswordStyles.title}>
            Mudar Senha
        </Text>
    );
}