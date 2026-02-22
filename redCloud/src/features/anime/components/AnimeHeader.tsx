import { View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { makeAnimeStyles } from "../screens/AnimeScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";
import { useMemo } from "react";

export default function AnimeHeader() {
    const { colors } = useTheme();
    const animeStyles = useMemo(() => makeAnimeStyles(colors), [colors]);
    return (
        <>
            <View style={animeStyles.coverContainer}>
                <Image
                    source={require("../../../assets/images/atackOnTitan.png")}
                    style={animeStyles.cover}
                />
                <LinearGradient
                    colors={["transparent", "transparent", colors.bg]}
                    locations={[0, 0.2, 1]}
                    style={animeStyles.coverGradient}
                />
            </View>

            <View style={animeStyles.content}>
                <Text style={animeStyles.title}>Attack on Titan</Text>

                <View style={animeStyles.infoRow}>
                    {["2013", "16+", "4 temporadas"].map((label) => (
                        <View key={label} style={animeStyles.infoChip}>
                            <Text style={animeStyles.infoText}>{label}</Text>
                        </View>
                    ))}
                </View>

                <Text style={animeStyles.description}>
                    A humanidade está à beira da extinção após a aparição dos Titãs.
                    Eren Yeager decide lutar contra essas criaturas.
                </Text>
            </View>
        </>
    );
}