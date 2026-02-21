import { View, Text } from "react-native";
import { makeSearchStyles } from "../../src/styles/search.styles";
import { useTheme } from "../../src/theme/ThemeContext";
import { useMemo } from "react";
import SearchItem from "./SearchItem";

export default function SearchList() {
    const { colors } = useTheme();
    const SearchStyles = useMemo(() => makeSearchStyles(colors), [colors]);
    return (
        <>
            <View style={SearchStyles.titleContainer}>
                <Text style={SearchStyles.title}>Mais Pesquisados</Text>
            </View>

            <View style={SearchStyles.listContainer}>
                <SearchItem
                    title="Naruto"
                    image={require("../../src/assets/images/narutin.png")}
                />

                <SearchItem
                    title="One Piece"
                    image={require("../../src/assets/images/one-piece.png")}
                />

                <SearchItem
                    title="Gachiakuta"
                    image={require("../../src/assets/images/gachakuta.png")}
                />

                <SearchItem
                    title="Jujutsu Kaisen"
                    image={require("../../src/assets/images/jujutsu-kaisen.png")}
                />

                <SearchItem
                    title="Chainsaw Man"
                    image={require("../../src/assets/images/chainsaw.png")}
                />

                <SearchItem
                    title="Attack on Titan"
                    image={require("../../src/assets/images/attack-titan.png")}
                />

                <SearchItem
                    title="One Punch Man"
                    image={require("../../src/assets/images/one-punch-man.png")}
                />

                <SearchItem
                    title="Your Name"
                    image={require("../../src/assets/images/your-name.png")}
                />
            </View>
        </>
    );
}