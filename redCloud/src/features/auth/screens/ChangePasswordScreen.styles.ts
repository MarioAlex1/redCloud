import { StyleSheet } from "react-native";
import { Colors } from "../../../theme/colors";

export function makeChangePasswordStyles(c: Colors) {
    return StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: c.bg,
        padding: 20,
    },

    title: {
        color: c.text,
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 20,
        marginTop: 190,
    },

    label: {
        color: "gray",
        marginBottom: 10,
    },

    input: {
        backgroundColor: c.bgInput,
        color: c.text,
        padding: 12,
        borderRadius: 8,
        marginBottom: 25,
        borderWidth: 1,
        borderColor: c.bgDivider,
    },

    message: {
        color: c.accent,
        marginBottom: 20,
    },

    saveButton: {
        backgroundColor: "#e50914",
        padding: 15,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 10,
    },

    saveButtonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },

    backButton: {
        marginTop: 25,
        flexDirection: "row",
        alignItems: "center",
    },

    backText: {
        color: c.text,
        marginLeft: 8,
    },
    });
}