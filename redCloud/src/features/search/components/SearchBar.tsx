import { View, TextInput, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { makeSearchStyles } from "../screens/SearchScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";
import { useMemo } from "react";

export default function SearchBar() {
    const { colors } = useTheme();
    const SearchStyles = useMemo(() => makeSearchStyles(colors), [colors]);
    return (
        <View style={SearchStyles.searchBar}>
            <TextInput
                placeholder="Buscar anime..."
                placeholderTextColor="#aaa"
                style={SearchStyles.searchInput}
            />

            <TouchableOpacity style={SearchStyles.voiceButton}>
                <MaterialIcons name="mic" size={24} color={colors.text} />
            </TouchableOpacity>
        </View>
    );
}