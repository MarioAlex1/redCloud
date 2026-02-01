import { View, Text } from "react-native";
import { SearchStyles } from "../../src/styles/search.styles";
import SearchItem from "./SearchItem";

export default function SearchList() {
    return (
        <>
            <View style={SearchStyles.titleContainer}>
                <Text style={SearchStyles.title}>Mais Pesquisados</Text>
            </View>

            <View style={SearchStyles.listContainer}>
                <SearchItem
                    title="Naruto"
                    image={require("../../assets/images/narutin.png")}
                />

                <SearchItem
                    title="One Piece"
                    image={require("../../assets/images/one-piece.png")}
                />

                <SearchItem
                    title="Gachiakuta"
                    image={require("../../assets/images/gachakuta.png")}
                />

                <SearchItem
                    title="Jujutsu Kaisen"
                    image={require("../../assets/images/jujutsu-kaisen.png")}
                />

                <SearchItem
                    title="Chainsaw Man"
                    image={require("../../assets/images/chainsaw.png")}
                />

                <SearchItem
                    title="Attack on Titan"
                    image={require("../../assets/images/attack-titan.png")}
                />

                <SearchItem
                    title="One Punch Man"
                    image={require("../../assets/images/one-punch-man.png")}
                />

                <SearchItem
                    title="Your Name"
                    image={require("../../assets/images/your-name.png")}
                />
            </View>
        </>
    );
}