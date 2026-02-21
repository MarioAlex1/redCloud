import { View, Text, Image } from "react-native";
import { makeAnimeStyles } from "../screens/AnimeScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";
import { useMemo } from "react";

export default function AnimeHeader() {
    const { colors } = useTheme();
    const animeStyles = useMemo(() => makeAnimeStyles(colors), [colors]);
    return (
        <>
            <Image
                source={require("../../../assets/images/atackOnTitan.png")}
                style={animeStyles.cover}
            />

            <View style={animeStyles.content}>
                <Text style={animeStyles.title}>Attack on Titan</Text>

                <View style={animeStyles.infoRow}>
                    <Text style={animeStyles.infoText}>2013</Text>
                    <Text style={animeStyles.infoText}>16+</Text>
                    <Text style={animeStyles.infoText}>4 temporadas</Text>
                </View>

                <Text style={animeStyles.description}>
                    A humanidade está à beira da extinção após a aparição dos Titãs.
                    Eren Yeager decide lutar contra essas criaturas.
                </Text>
            </View>
        </>
    );
}