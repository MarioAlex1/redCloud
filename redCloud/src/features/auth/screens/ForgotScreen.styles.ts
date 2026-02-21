import { StyleSheet } from "react-native";
import { Colors } from "../../../theme/colors";

export function makeForgotStyles(c: Colors) {
    return StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: c.bg,
        justifyContent: "center",
        paddingHorizontal: 20,
    },

    card: {
        backgroundColor: c.bgInput,
        padding: 25,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: c.bgDivider,
    },

    title: {
        color: c.text,
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 15,
        textAlign: "center",
    },

    subtitle: {
        color: c.textSub,
        fontSize: 14,
        textAlign: "center",
        marginBottom: 25,
        lineHeight: 20,
    },

    input: {
        backgroundColor: c.bg,
        color: c.text,
        padding: 12,
        borderRadius: 8,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: c.bgDivider,
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
        color: c.textMuted,
        marginRight: 6,
    },

    backToLoginText: {
        color: c.accent,
        fontWeight: "bold",
    },
    });
}