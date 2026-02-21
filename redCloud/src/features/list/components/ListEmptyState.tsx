import { View, Text, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { makeListStyles } from "../screens/ListScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";
import { useMemo } from "react";
import { ListTab } from "../screens/ListScreen";

const content = {
    assistidos: {
        image: require("../../../assets/images/nadaAqui.png"),
        title: "Opa... Nada assistido ainda",
        subtitle: "Vamos assistir algo",
        button: "Procurar",
    },
    naoAssistidos: {
        image: require("../../../assets/images/nao-assistidos.png"),
        title: "Opa... Nada aqui...",
        subtitle: "Vamos adicionar algo",
        button: "Adicionar na Lista",
    },
    downloads: {
        image: require("../../../assets/images/downloads.png"),
        title: "Nada baixado ainda",
        subtitle: "Baixe algum anime",
        button: "Procurar",
    },
};

export default function ListEmptyState({ tab }: { tab: ListTab }) {
    const { colors } = useTheme();
    const ListStyles = useMemo(() => makeListStyles(colors), [colors]);
    const data = content[tab];

    return (
        <View style={ListStyles.emptyContainer}>
            <Image source={data.image} style={ListStyles.emptyImage} />
            <Text style={ListStyles.emptyTitle}>{data.title}</Text>
            <Text style={ListStyles.emptySubtitle}>{data.subtitle}</Text>

            <Link href="/home" asChild>
                <TouchableOpacity style={ListStyles.addButton}>
                    <Text style={ListStyles.addButtonText}>
                        {data.button}
                    </Text>
                </TouchableOpacity>
            </Link>
        </View>
    );
}