import { View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { animeStyles } from "../../src/styles/anime.styles";

const seasons = [1, 2, 3, 4];

export default function SeasonSelector({
    selectedSeason,
    open,
    onToggle,
    onSelectSeason,
}: any) {
    return (
        <>
            <TouchableOpacity
                onPress={onToggle}
                style={animeStyles.seasonSelector}
            >
                <Text style={animeStyles.seasonSelectorText}>
                    Temporada {selectedSeason}
                </Text>
                <Ionicons
                    name={open ? "chevron-up" : "chevron-down"}
                    size={24}
                    color="#fff"
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