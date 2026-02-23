import { View, TextInput, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { makeSearchStyles } from "../screens/SearchScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";
import { useMemo } from "react";

interface Props {
    value: string;
    onChangeText: (text: string) => void;
}

// Campo de busca com botão de limpar ou microfone
export default function SearchBar({ value, onChangeText }: Props) {
    const { colors } = useTheme();
    const SearchStyles = useMemo(() => makeSearchStyles(colors), [colors]);
    return (
        <View style={SearchStyles.searchBar}>
            <TextInput
                placeholder="Buscar anime..."
                placeholderTextColor="#aaa"
                style={SearchStyles.searchInput}
                value={value}
                onChangeText={onChangeText}
                returnKeyType="search"
            />
            {value.length > 0 ? (
                <TouchableOpacity style={SearchStyles.voiceButton} onPress={() => onChangeText('')}>
                    <MaterialIcons name="close" size={24} color={colors.text} />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity style={SearchStyles.voiceButton}>
                    <MaterialIcons name="mic" size={24} color={colors.text} />
                </TouchableOpacity>
            )}
        </View>
    );
}