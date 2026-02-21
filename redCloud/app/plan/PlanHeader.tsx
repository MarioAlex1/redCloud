import { Text } from "react-native";
import { makePlanStyles } from "../../src/styles/plan.styles";
import { useTheme } from "../../src/theme/ThemeContext";
import { useMemo } from "react";

export default function PlanHeader() {
    const { colors } = useTheme();
    const PlanStyles = useMemo(() => makePlanStyles(colors), [colors]);
    return <Text style={PlanStyles.title}>Assinatura Prime</Text>;
}