import { View, TouchableOpacity, Text } from "react-native";
import { Feather, AntDesign, Entypo } from "@expo/vector-icons";
import { animeStyles } from "../../src/styles/anime.styles";

export default function AnimeSecondaryActions({
    liked,
    onToggleLike,
}: {
    liked: boolean;
    onToggleLike: () => void;
}) {
    return (
        <View style={animeStyles.secondaryActions}>
            <TouchableOpacity style={animeStyles.secondaryItem}>
                <Feather name="plus" size={26} color="#fff" />
                <Text style={animeStyles.secondaryText}>Minha Lista</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={animeStyles.secondaryItem}
                onPress={onToggleLike}
            >
                <AntDesign
                    name="like"
                    size={26}
                    color={liked ? "#e50914" : "#fff"}
                />
                <Text
                    style={[
                        animeStyles.secondaryText,
                        liked && { color: "#e50914" },
                    ]}
                >
                    Gostei
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={animeStyles.secondaryItem}>
                <Entypo name="share" size={26} color="#fff" />
                <Text style={animeStyles.secondaryText}>Compartilhar</Text>
            </TouchableOpacity>
        </View>
    );
}