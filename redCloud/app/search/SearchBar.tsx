import { View, TextInput, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { SearchStyles } from "../../src/styles/search.styles";

export default function SearchBar() {
    return (
        <View style={SearchStyles.searchBar}>
            <TextInput
                placeholder="Buscar anime..."
                placeholderTextColor="#aaa"
                style={SearchStyles.searchInput}
            />

            <TouchableOpacity style={SearchStyles.voiceButton}>
                <MaterialIcons name="mic" size={24} color="#fff" />
            </TouchableOpacity>
        </View>
    );
}