import { View, TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { UserStyles } from "../../src/styles/user.styles";

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
    return (
        <View style={UserStyles.container}>
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