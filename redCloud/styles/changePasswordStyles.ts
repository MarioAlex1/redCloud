import { StyleSheet } from "react-native";

export const changePasswordStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        padding: 20,
    },

    title: {
        color: "#fff",
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
        backgroundColor: "#111",
        color: "#fff",
        padding: 12,
        borderRadius: 8,
        marginBottom: 25,
        borderWidth: 1,
        borderColor: "#222",
    },

    message: {
        color: "#e50914",
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
        color: "#fff",
        marginLeft: 8,
    },
});