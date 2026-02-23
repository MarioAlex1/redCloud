import { TouchableOpacity, Text } from "react-native";
import { Link } from "expo-router";
import { makePlanStyles } from "../screens/PlanScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";
import { useMemo } from "react";

// Botão que navega para a tela de pagamento
export default function PlanSubscribeButton() {
    const { colors } = useTheme();
    const PlanStyles = useMemo(() => makePlanStyles(colors), [colors]);
    return (
        <Link href="/payment" asChild>
            <TouchableOpacity style={PlanStyles.subscribeButton}>
                <Text style={PlanStyles.subscribeButtonText}>
                    Inscreva-se
                </Text>
            </TouchableOpacity>
        </Link>
    );
}