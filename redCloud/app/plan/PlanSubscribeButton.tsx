import { TouchableOpacity, Text } from "react-native";
import { Link } from "expo-router";
import { PlanStyles } from "../../src/styles/plan.styles";

export default function PlanSubscribeButton() {
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