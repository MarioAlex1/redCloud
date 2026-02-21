import { Image } from "react-native";
import { makePlanStyles } from "../screens/PlanScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";
import { useMemo } from "react";

export default function PlanBanner() {
    const { colors } = useTheme();
    const PlanStyles = useMemo(() => makePlanStyles(colors), [colors]);
    return (
        <Image
            source={require("../../../assets/images/primebanner.png")}
            style={PlanStyles.topImage}
        />
    );
}