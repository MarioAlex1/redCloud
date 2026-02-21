import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { makePlanStyles } from "../screens/PlanScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";
import { useMemo } from "react";

export default function PlanBenefits() {
    const { colors } = useTheme();
    const PlanStyles = useMemo(() => makePlanStyles(colors), [colors]);
    return (
        <View style={PlanStyles.benefitsContainer}>
            <Benefit text="Preço acessível" styles={PlanStyles} />
            <Benefit text="Downloads ilimitados" styles={PlanStyles} />
            <Benefit text="Assista sem anúncios" styles={PlanStyles} />
            <Benefit text="Ícone de membro personalizado" styles={PlanStyles} />
        </View>
    );
}

function Benefit({ text, styles }: { text: string; styles: ReturnType<typeof makePlanStyles> }) {
    return (
        <View style={styles.row}>
            <MaterialIcons name="star" size={22} color="#FFD700" />
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}