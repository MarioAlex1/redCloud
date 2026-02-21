import { StyleSheet } from "react-native";
import { Colors } from "../theme/colors";

export function makePlayerStyles(c: Colors) {
    return StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: c.bg,
    },
    
    videoArea: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    controls: {
        position: "absolute",
        bottom: 40,
        width: "100%",
        paddingHorizontal: 20,
        alignItems: "center",
    },

    episodeTitle: {
        color: c.text,
        fontSize: 18,
        marginBottom: 100,
        textAlign: "center",
    },

    playButton: {
        marginBottom: 120,
    },

    progressBarBG: {
        width: "100%",
        height: 6,
        backgroundColor: c.bgProgress,
        borderRadius: 3,
    },

    progressBar: {
        height: 6,
        backgroundColor: c.accent,
        borderRadius: 3,
    },
    });
}