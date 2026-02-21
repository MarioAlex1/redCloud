import { View, TouchableWithoutFeedback } from "react-native";
import { useState, useEffect, useMemo } from "react";
import { StatusBar } from "expo-status-bar";
import * as ScreenOrientation from "expo-screen-orientation";
import * as NavigationBar from "expo-navigation-bar";

import { makePlayerStyles } from "./PlayerScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";
import PlayerVideo from "../components/PlayerVideo";
import PlayerControls from "../components/PlayerControls";

export default function PlayerPage() {
    const { colors } = useTheme();
    const playerStyles = useMemo(() => makePlayerStyles(colors), [colors]);
    const [paused, setPaused] = useState(false);
    const [progress, setProgress] = useState(0.1);
    const [showControls, setShowControls] = useState(true);

    /* FULLSCREEN */
    useEffect(() => {
        ScreenOrientation.lockAsync(
            ScreenOrientation.OrientationLock.LANDSCAPE
        );

        NavigationBar.setVisibilityAsync("hidden");
        NavigationBar.setBehaviorAsync("overlay-swipe");

        return () => {
            ScreenOrientation.lockAsync(
                ScreenOrientation.OrientationLock.PORTRAIT_UP
            );
            NavigationBar.setVisibilityAsync("visible");
        };
    }, []);

    /* ESCONDER CONTROLES */
    useEffect(() => {
        if (!showControls) return;

        const timer = setTimeout(() => {
            setShowControls(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, [showControls]);

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