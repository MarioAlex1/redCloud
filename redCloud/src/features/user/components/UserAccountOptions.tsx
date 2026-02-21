import { View, TouchableOpacity, Text } from "react-native";
import { Link } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { makeUserStyles } from "../screens/UserScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";
import { useMemo } from "react";

export default function UserAccountOptions() {
    const { colors } = useTheme();
    const UserStyles = useMemo(() => makeUserStyles(colors), [colors]);
    return (
        <View style={UserStyles.container}>
            <Option href="/plan" label="Plano de membro" styles={UserStyles} />
            <Option href="/change-email" label="Mudar email" styles={UserStyles} />
            <Option href="/change-password" label="Mudar senha" styles={UserStyles} />
        </View>
    );
}

function Option({ href, label, styles }: { href: string; label: string; styles: ReturnType<typeof makeUserStyles> }) {
    return (
        <Link href={href} asChild>
            <TouchableOpacity style={styles.optionRow}>
                <Text style={styles.optionText}>{label}</Text>
                <MaterialIcons name="chevron-right" size={20} color="gray" />
            </TouchableOpacity>
        </Link>
    );
}