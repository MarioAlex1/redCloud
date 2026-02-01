import { View, Text, ScrollView, Image } from "react-native";
import { homeStyles } from "../../src/styles/home.styles";

interface Props {
    title: string;
}

export default function HomeSection({ title }: Props) {
    return (
        <View style={homeStyles.section}>
            <Text style={homeStyles.sectionTitle}>{title}</Text>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={homeStyles.cardRow}
            >
                <Image
                    source={require("../../assets/images/jujutsu.png")}
                    style={homeStyles.card}
                />
                <Image
                    source={require("../../assets/images/gachiakuta.png")}
                    style={homeStyles.card}
                />
                <Image
                    source={require("../../assets/images/fragrantFlower.png")}
                    style={homeStyles.card}
                />
            </ScrollView>
        </View>
    );
}