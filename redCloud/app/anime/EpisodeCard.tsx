// EpisodeCard.tsx
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { animeStyles } from "../../src/styles/anime.styles";

export default function EpisodeCard({ episode }: any) {
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
                <Feather name="download" size={24} color="#fff" />
            </TouchableOpacity>
        </View>
    );
}