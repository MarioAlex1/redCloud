import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { useState, useMemo } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { makeListStyles } from "../../src/styles/list.styles";
import { useTheme } from "../../src/theme/ThemeContext";

export default function ListHeader() {
    const { colors } = useTheme();
    const ListStyles = useMemo(() => makeListStyles(colors), [colors]);
    const [searchOpen, setSearchOpen] = useState(false);

    return (
        <>
            <View style={ListStyles.header}>
                <Text style={ListStyles.title}>Minha Lista</Text>

                <TouchableOpacity onPress={() => setSearchOpen(!searchOpen)}>
                    <MaterialIcons name="search" size={30} color={colors.text} />
                </TouchableOpacity>
            </View>

            {searchOpen && (
                <View style={ListStyles.searchBar}>
                    <TextInput
                        placeholder="Pesquisar na lista..."
                        placeholderTextColor="#aaa"
                        style={ListStyles.searchInput}
                    />
                </View>
            )}
        </>
    );
}