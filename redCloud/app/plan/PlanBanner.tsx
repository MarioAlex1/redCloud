import { Image } from "react-native";
import { PlanStyles } from "../../src/styles/plan.styles";

export default function PlanBanner() {
    return (
        <Image
            source={require("../../assets/images/primebanner.png")}
            style={PlanStyles.topImage}
        />
    );
}