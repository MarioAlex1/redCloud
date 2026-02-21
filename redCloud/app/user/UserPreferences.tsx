import { View, TouchableOpacity, Text, Switch } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { makeUserStyles } from "../../src/styles/user.styles";
import { useTheme } from "../../src/theme/ThemeContext";
import { useMemo } from "react";

interface Props {
    audio: string;
    subtitle: string;
    onChangeAudio: (v: string) => void;
    onChangeSubtitle: (v: string) => void;
}

export default function UserPreferences({
    audio,
    subtitle,
    onChangeAudio,
    onChangeSubtitle,
}: Props) {
    const { colors, theme, toggleTheme } = useTheme();
    const UserStyles = useMemo(() => makeUserStyles(colors), [colors]);
    return (
        <View style={UserStyles.container}>
            {/* Toggle de Tema */}
            <View style={UserStyles.optionRow}>
                <Text style={UserStyles.optionText}>
                    {theme === "dark" ? "🌙 Modo Escuro" : "☀️ Modo Claro"}
                </Text>
                <Switch
                    value={theme === "dark"}
                    onValueChange={toggleTheme}
                    trackColor={{ false: "#ccc", true: colors.brand }}
                    thumbColor={theme === "dark" ? colors.text : "#fff"}
                />
            </View>
            <TouchableOpacity
                style={UserStyles.optionRow}
                onPress={() =>
                    onChangeAudio(audio === "Português" ? "Inglês" : "Português")
                }
            >
                <Text style={UserStyles.optionText}>Áudio: {audio}</Text>
                <MaterialIcons name="chevron-right" size={20} color="gray" />
            </TouchableOpacity>

            <TouchableOpacity
                style={UserStyles.optionRow}
                onPress={() =>
                    onChangeSubtitle(subtitle === "N/A" ? "Português" : "N/A")
                }
            >
                <Text style={UserStyles.optionText}>Legenda: {subtitle}</Text>
                <MaterialIcons name="chevron-right" size={20} color="gray" />
            </TouchableOpacity>
        </View>
    );
}