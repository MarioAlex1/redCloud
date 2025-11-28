import { StyleSheet } from "react-native";

export const forgotStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        justifyContent: "center",
        paddingHorizontal: 20,
    },

    card: {
        backgroundColor: "#111",
        padding: 25,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#222",
    },

    title: {
        color: "#fff",
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 15,
        textAlign: "center",
    },

    subtitle: {
        color: "#aaa",
        fontSize: 14,
        textAlign: "center",
        marginBottom: 25,
        lineHeight: 20,
    },

    input: {
        backgroundColor: "#000",
        color: "#fff",
        padding: 12,
        borderRadius: 8,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: "#222",
    },

    sendButton: {
        backgroundColor: "#e50914",
        padding: 15,
        borderRadius: 8,
        alignItems: "center",
    },

    sendButtonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },

    bottomArea: {
        marginTop: 25,
        flexDirection: "row",
        justifyContent: "center",
    },

    bottomText: {
        color: "#888",
        marginRight: 6,
    },

    backToLoginText: {
        color: "#e50914",
        fontWeight: "bold",
    },
});