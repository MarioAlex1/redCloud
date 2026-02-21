import { View, TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { makeAnimeStyles } from "../screens/AnimeScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";
import { useMemo } from "react";

export default function AnimeActions() {
    const { colors } = useTheme();
    const animeStyles = useMemo(() => makeAnimeStyles(colors), [colors]);
    return (
        <View style={animeStyles.actionRow}>
            <Link href="/player" asChild>
                <TouchableOpacity style={animeStyles.playButton}>
                    <MaterialIcons name="play-arrow" size={22} color="#fff" />
                    <Text style={animeStyles.buttonText}>Assistir</Text>
                </TouchableOpacity>
            </Link>

            <TouchableOpacity style={animeStyles.downloadButton}>
                <MaterialIcons name="download" size={22} color="#fff" />
                <Text style={animeStyles.buttonText}>Baixar</Text>
            </TouchableOpacity>
        </View>
    );
}