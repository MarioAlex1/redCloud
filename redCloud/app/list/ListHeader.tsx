import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { ListStyles } from "../../src/styles/list.styles";

export default function ListHeader() {
    const [searchOpen, setSearchOpen] = useState(false);

    return (
        <>
            <View style={ListStyles.header}>
                <Text style={ListStyles.title}>Minha Lista</Text>

                <TouchableOpacity onPress={() => setSearchOpen(!searchOpen)}>
                    <MaterialIcons name="search" size={30} color="#fff" />
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