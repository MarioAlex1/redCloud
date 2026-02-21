import { Image } from "react-native";
import { makePlanStyles } from "../../src/styles/plan.styles";
import { useTheme } from "../../src/theme/ThemeContext";
import { useMemo } from "react";

export default function PlanBanner() {
    const { colors } = useTheme();
    const PlanStyles = useMemo(() => makePlanStyles(colors), [colors]);
    return (
        <Image
            source={require("../../src/assets/images/primebanner.png")}
            style={PlanStyles.topImage}
        />
    );
}