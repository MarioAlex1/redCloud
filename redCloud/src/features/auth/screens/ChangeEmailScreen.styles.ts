import { StyleSheet } from "react-native";
import { Colors } from "../../../theme/colors";

export function makeChangeEmailStyles(c: Colors) {
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
        marginBottom: 8,
        textAlign: "center",
    },

    subtitle: {
        color: c.textSub,
        fontSize: 14,
        textAlign: "center",
        marginBottom: 25,
        lineHeight: 20,
    },

    label: {
        color: c.textSub,
        marginBottom: 8,
        fontSize: 14,
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

    message: {
        color: c.accent,
        marginBottom: 15,
        textAlign: "center",
    },

    saveButton: {
        backgroundColor: c.primary,
        padding: 15,
        borderRadius: 999,
        alignItems: "center",
        marginTop: 5,
    },

    saveButtonText: {
        color: c.onPrimary,
        fontWeight: "bold",
        fontSize: 16,
    },

    bottomArea: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },

    bottomText: {
        color: c.textMuted,
        marginRight: 6,
    },

    backText: {
        color: c.accent,
        fontWeight: "bold",
    },
    });
}
