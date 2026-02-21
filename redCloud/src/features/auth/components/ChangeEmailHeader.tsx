import { Text } from "react-native";
import { makeChangeEmailStyles } from "../screens/ChangeEmailScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";
import { useMemo } from "react";

export default function ChangeEmailHeader() {
    const { colors } = useTheme();
    const ChangeEmailStyles = useMemo(() => makeChangeEmailStyles(colors), [colors]);
    return (
        <Text style={ChangeEmailStyles.title}>
            Mudar Email
        </Text>
    );
}