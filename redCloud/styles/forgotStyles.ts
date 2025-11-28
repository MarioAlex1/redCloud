import { StyleSheet } from "react-native";

export const forgotStyles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    card: {
        width: "85%",
        padding: 25,
        borderRadius: 20,
        backgroundColor: "#000",
        alignItems: "center",
    },

    title: {
        fontSize: 26,
        fontWeight: "700",
        color: "#fff",
        marginTop: 10,
        marginBottom: 10,
        textAlign: "center",
    },

    subtitle: {
        fontSize: 15,
        color: "#ccc",
        textAlign: "center",
        marginBottom: 20,
        lineHeight: 20,
    },

    input: {
        width: "100%",
        height: 50,
        backgroundColor: "#222",
        borderRadius: 10,
        paddingHorizontal: 15,
        color: "#fff",
        fontSize: 16,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: "#444",
    },

    sendButton: {
        width: "100%",
        height: 50,
        borderRadius: 10,
        backgroundColor: "#6E1F29",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
    },

    sendButtonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "700",
    },

    bottomArea: {
        flexDirection: "row",
        gap: 6,
    },

    bottomText: {
        color: "#ccc",
    },

    backToLoginText: {
        color: "red",
        fontWeight: "600",
    },
});