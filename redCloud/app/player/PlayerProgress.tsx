import { View } from "react-native";
import { makePlayerStyles } from "../../src/styles/player.styles";
import { useTheme } from "../../src/theme/ThemeContext";
import { useMemo } from "react";

export default function PlayerProgress({
    progress,
}: {
    progress: number;
}) {
    const { colors } = useTheme();
    const playerStyles = useMemo(() => makePlayerStyles(colors), [colors]);
    return (
        <View style={playerStyles.progressBarBG}>
            <View
                style={[
                    playerStyles.progressBar,
                    { width: `${progress * 100}%` },
                ]}
            />
        </View>
    );
}