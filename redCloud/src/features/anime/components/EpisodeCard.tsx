import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { makeAnimeStyles } from "../screens/AnimeScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";
import { useMemo } from "react";

// Card de um episódio com imagem, informações e botão de download
export default function EpisodeCard({ episode }: any) {
    const { colors } = useTheme();
    const animeStyles = useMemo(() => makeAnimeStyles(colors), [colors]);
    return (
        <View style={animeStyles.episodeCard}>
            <Image source={episode.image} style={animeStyles.episodeImage} />

            <View style={animeStyles.episodeInfo}>
                <Text style={animeStyles.episodeTitle}>{episode.title}</Text>
                <Text style={animeStyles.episodeDuration}>{episode.duration}</Text>
                <Text style={animeStyles.episodeDescription}>
                    {episode.description}
                </Text>
            </View>

            <TouchableOpacity>
                <MaterialIcons name="download" size={24} color={colors.text} />
            </TouchableOpacity>
        </View>
    );
}