import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { playerStyles } from "../../src/styles/player.styles";
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
    return (
        <View style={playerStyles.controls}>
            <Text style={playerStyles.episodeTitle}>
                Episódio 1 — “O Ataque”
            </Text>

            <TouchableOpacity
                style={playerStyles.playButton}
                onPress={onTogglePlay}
            >
                <Feather
                    name={paused ? "play" : "pause"}
                    size={50}
                    color="#fff"
                />
            </TouchableOpacity>

            <PlayerProgress progress={progress} />
        </View>
    );
}