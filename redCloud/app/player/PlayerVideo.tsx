import { ImageBackground } from "react-native";
import { ReactNode } from "react";
import { playerStyles } from "../../src/styles/player.styles";

export default function PlayerVideo({
    children,
}: {
    children?: ReactNode;
}) {
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