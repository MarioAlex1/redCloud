import { ImageBackground } from "react-native";
import { ReactNode, useMemo } from "react";
import { makePlayerStyles } from "../screens/PlayerScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";

export default function PlayerVideo({
    children,
}: {
    children?: ReactNode;
}) {
    const { colors } = useTheme();
    const playerStyles = useMemo(() => makePlayerStyles(colors), [colors]);
    return (
        <ImageBackground
            source={require("../../../assets/images/player.png")}
            style={playerStyles.videoArea}
            resizeMode="cover"
        >
            {children}
        </ImageBackground>
    );
}