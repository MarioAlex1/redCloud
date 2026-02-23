import { View, TouchableWithoutFeedback } from "react-native";
import { useMemo } from "react";
import { StatusBar } from "expo-status-bar";

import { makePlayerStyles } from "./PlayerScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";
import PlayerVideo from "../components/PlayerVideo";
import PlayerControls from "../components/PlayerControls";
import { usePlayer } from "../hooks/usePlayer";

// Tela do player em fullscreen com controles ocultáveis
export default function PlayerPage() {
    const { colors } = useTheme();
    const playerStyles = useMemo(() => makePlayerStyles(colors), [colors]);
    const { paused, setPaused, progress, showControls, setShowControls } = usePlayer();

    return (
        <>
            <StatusBar hidden />

            <TouchableWithoutFeedback onPress={() => setShowControls(true)}>
                <View style={playerStyles.container}>
                    <PlayerVideo>
                        {showControls && (
                            <PlayerControls
                                paused={paused}
                                progress={progress}
                                onTogglePlay={() => setPaused(!paused)}
                            />
                        )}
                    </PlayerVideo>
                </View>
            </TouchableWithoutFeedback>
        </>
    );
}