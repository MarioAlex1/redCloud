import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { makePlayerStyles } from "../screens/PlayerScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";
import { useMemo } from "react";
import PlayerProgress from "./PlayerProgress";

interface Props {
    paused: boolean;
    progress: number;
    onTogglePlay: () => void;
}

export default function PlayerControls({
    paused,
    progress,
    onTogglePlay,
}: Props) {
    const { colors } = useTheme();
    const playerStyles = useMemo(() => makePlayerStyles(colors), [colors]);
    return (
        <View style={playerStyles.controls}>
            <Text style={playerStyles.episodeTitle}>
                Episódio 1 — “O Ataque”
            </Text>

            <TouchableOpacity
                style={playerStyles.playButton}
                onPress={onTogglePlay}
            >
                <MaterialIcons
                    name={paused ? "play-arrow" : "pause"}
                    size={50}
                    color="#fff"
                />
            </TouchableOpacity>

            <PlayerProgress progress={progress} />
        </View>
    );
}