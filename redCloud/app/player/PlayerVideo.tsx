import { ImageBackground } from "react-native";
import { ReactNode, useMemo } from "react";
import { makePlayerStyles } from "../../src/styles/player.styles";
import { useTheme } from "../../src/theme/ThemeContext";

export default function PlayerVideo({
    children,
}: {
    children?: ReactNode;
}) {
    const { colors } = useTheme();
    const playerStyles = useMemo(() => makePlayerStyles(colors), [colors]);
    return (
        <ImageBackground
            source={require("../../src/assets/images/player.png")}
            style={playerStyles.videoArea}
            resizeMode="cover"
        >
            {children}
        </ImageBackground>
    );
}