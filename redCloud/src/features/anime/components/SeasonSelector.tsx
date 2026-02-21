import { View, TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { makeAnimeStyles } from "../screens/AnimeScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";
import { useMemo } from "react";

const seasons = [1, 2, 3, 4];

export default function SeasonSelector({
    selectedSeason,
    open,
    onToggle,
    onSelectSeason,
}: any) {
    const { colors } = useTheme();
    const animeStyles = useMemo(() => makeAnimeStyles(colors), [colors]);
    return (
        <>
            <TouchableOpacity
                onPress={onToggle}
                style={animeStyles.seasonSelector}
            >
                <Text style={animeStyles.seasonSelectorText}>
                    Temporada {selectedSeason}
                </Text>
                <MaterialIcons
                    name={open ? "keyboard-arrow-up" : "keyboard-arrow-down"}
                    size={24}
                    color={colors.text}
                />
            </TouchableOpacity>

            {open && (
                <View style={animeStyles.seasonList}>
                    {seasons.map((s) => (
                        <TouchableOpacity
                            key={s}
                            onPress={() => onSelectSeason(s)}
                            style={animeStyles.seasonItem}
                        >
                            <Text style={animeStyles.seasonItemText}>
                                Temporada {s}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </>
    );
}