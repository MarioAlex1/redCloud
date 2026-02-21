import { View, Text, TouchableOpacity, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { SearchStyles } from "../../src/styles/search.styles";

interface Props {
    title: string;
    image: any;
}

export default function SearchItem({ title, image }: Props) {
    return (
        <View style={SearchStyles.listItem}>
            <Image source={image} style={SearchStyles.itemImage} />

            <Text style={SearchStyles.itemTitle}>{title}</Text>

            <TouchableOpacity>
                <MaterialIcons name="play-circle" size={24} color="white" />
            </TouchableOpacity>
        </View>
    );
}