import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { PlanStyles } from "../../src/styles/plan.styles";

export default function PlanBenefits() {
    return (
        <View style={PlanStyles.benefitsContainer}>
            <Benefit text="Preço acessível" />
            <Benefit text="Downloads ilimitados" />
            <Benefit text="Assista sem anúncios" />
            <Benefit text="Ícone de membro personalizado" />
        </View>
    );
}

function Benefit({ text }: { text: string }) {
    return (
        <View style={PlanStyles.row}>
            <Feather name="star" size={22} color="#FFD700" />
            <Text style={PlanStyles.text}>{text}</Text>
        </View>
    );
}