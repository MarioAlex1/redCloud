import { View } from "react-native";
import { playerStyles } from "../../src/styles/player.styles";

export default function PlayerProgress({
    progress,
}: {
    progress: number;
}) {
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