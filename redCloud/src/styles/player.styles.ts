import { StyleSheet } from "react-native";

export const playerStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
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
        color: "#fff",
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
        backgroundColor: "#444",
        borderRadius: 3,
    },

    progressBar: {
        height: 6,
        backgroundColor: "#e50914",
        borderRadius: 3,
    },
});