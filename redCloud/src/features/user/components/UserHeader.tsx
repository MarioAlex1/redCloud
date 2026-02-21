import { Text } from "react-native";
import { makeUserStyles } from "../screens/UserScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";
import { useMemo } from "react";

export default function UserHeader() {
    const { colors } = useTheme();
    const UserStyles = useMemo(() => makeUserStyles(colors), [colors]);
    return <Text style={UserStyles.title}>Perfil</Text>;
}