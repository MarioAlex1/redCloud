import { View, Text, TouchableOpacity, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { makeSearchStyles } from "../screens/SearchScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";
import { useMemo } from "react";

interface Props {
    title: string;
    image: any;
}

// Item de resultado de busca com imagem, título e botão de play
export default function SearchItem({ title, image }: Props) {
    const { colors } = useTheme();
    const SearchStyles = useMemo(() => makeSearchStyles(colors), [colors]);
    return (
        <View style={SearchStyles.listItem}>
            <Image source={image} style={SearchStyles.itemImage} />

            <Text style={SearchStyles.itemTitle}>{title}</Text>

            <TouchableOpacity>
                <MaterialIcons name="play-circle" size={24} color={colors.text} />
            </TouchableOpacity>
        </View>
    );
}