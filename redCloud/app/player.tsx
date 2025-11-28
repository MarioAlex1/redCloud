import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ImageBackground, TouchableWithoutFeedback } from "react-native";
import { Feather } from "@expo/vector-icons";
import { playerStyles } from "../styles/playerStyles";
import * as ScreenOrientation from "expo-screen-orientation";
import * as NavigationBar from "expo-navigation-bar";
import { StatusBar } from "expo-status-bar";

export default function PlayerPage() {
    const [paused, setPaused] = useState(false);
    const [progress, setProgress] = useState(0.1);
    const [showControls, setShowControls] = useState(true);

    // fullscreen
    useEffect(() => {
        // paisagem
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

        // esconder barra de navegação
        NavigationBar.setVisibilityAsync("hidden");
        NavigationBar.setBehaviorAsync("overlay-swipe"); 
        // igual o youtube

        return () => {
            // voltar ao normal
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
            NavigationBar.setVisibilityAsync("visible");
        };
    }, []);

    // esconder controles depois de 3s
    useEffect(() => {
        if (!showControls) return;
        const timer = setTimeout(() => setShowControls(false), 3000);
        return () => clearTimeout(timer);
    }, [showControls]);

    return (
        <>
            {/* esconder status bar também */}
            <StatusBar hidden />

            <TouchableWithoutFeedback onPress={() => setShowControls(true)}>
                <View style={playerStyles.container}>

                    <ImageBackground 
                        source={require("../assets/images/player.png")}
                        style={playerStyles.videoArea}
                        resizeMode="cover"
                    >
                        {showControls && (
                            <View style={playerStyles.controls}>
                                <Text style={playerStyles.episodeTitle}>
                                    Episódio 1 — “O Ataque”
                                </Text>

                                <TouchableOpacity
                                    style={playerStyles.playButton}
                                    onPress={() => setPaused(!paused)}
                                >
                                    <Feather
                                        name={paused ? "play" : "pause"}
                                        size={50}
                                        color="#fff"
                                    />
                                </TouchableOpacity>

                                <View style={playerStyles.progressBarBG}>
                                    <View
                                        style={[
                                            playerStyles.progressBar,
                                            { width: `${progress * 100}%` },
                                        ]}
                                    />
                                </View>
                            </View>
                        )}
                    </ImageBackground>
                </View>
            </TouchableWithoutFeedback>
        </>
    );
}