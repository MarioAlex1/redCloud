import { View, TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { makeAnimeStyles } from "../screens/AnimeScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";
import { useMemo } from "react";

export default function AnimeSecondaryActions({
    liked,
    onToggleLike,
}: {
    liked: boolean;
    onToggleLike: () => void;
}) {
    const { colors } = useTheme();
    const animeStyles = useMemo(() => makeAnimeStyles(colors), [colors]);
    return (
        <View style={animeStyles.secondaryActions}>
            <TouchableOpacity style={animeStyles.secondaryItem}>
                <MaterialIcons name="add" size={26} color={colors.text} />
                <Text style={animeStyles.secondaryText}>Minha Lista</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={animeStyles.secondaryItem}
                onPress={onToggleLike}
            >
                <MaterialIcons
                    name="thumb-up"
                    size={26}
                    color={liked ? "#e50914" : colors.text}
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
                <MaterialIcons name="share" size={26} color={colors.text} />
                <Text style={animeStyles.secondaryText}>Compartilhar</Text>
            </TouchableOpacity>
        </View>
    );
}