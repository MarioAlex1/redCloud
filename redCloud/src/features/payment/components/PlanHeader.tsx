import { Text } from "react-native";
import { makePlanStyles } from "../screens/PlanScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";
import { useMemo } from "react";

// Título da tela de assinatura Prime
export default function PlanHeader() {
    const { colors } = useTheme();
    const PlanStyles = useMemo(() => makePlanStyles(colors), [colors]);
    return <Text style={PlanStyles.title}>Assinatura Prime</Text>;
}