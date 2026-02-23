import { StyleSheet } from "react-native";
import { Colors } from "../../../theme/colors";

export function makeRegisterStyles(c: Colors) {
    return StyleSheet.create({
    background: {
        flex: 1
    },

    topCard: {
        width: "100%",
        height: "100%",
        padding: 20,
        paddingTop: "33%",
        backgroundColor: c.surface, // surface card
        borderRadius: 75,

        // isso mantém ele fixo no topo da imagem
        position: "absolute",
        top: "12%",
    },

    tittle: {
        fontSize: 35,
        fontWeight: "600",
        textAlign: 'center',
        bottom: 80
    },

    subtittle: {
        fontSize: 18,
        textAlign: 'center',
        bottom: 65
    },

    input: {
        width: "100%",
        padding: 18,
        backgroundColor: c.inputSurface,
        borderRadius: 20,
        marginBottom: 12,
        fontSize: 16,
    },

    buttonCreate: {
        backgroundColor: "#6E1F29",
        padding: 10,
        borderRadius: 999,
        marginTop: 30,
        width: "50%",
        alignItems: "center",
        alignSelf: "center",
    },

    buttonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
    },

    // estilização do lembre-me

    checkboxRow: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-end",
        gap: 8,
    },

    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 10,
    },

    checkboxLabel: {
        fontSize: 16,
        color: c.textSub,
    },

    errorBox: {
        backgroundColor: "rgba(180, 30, 30, 0.12)",
        borderLeftWidth: 4,
        borderLeftColor: "#B41E1E",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 14,
        marginBottom: 12,
    },

    errorText: {
        color: "#B41E1E",
        fontSize: 13,
        fontWeight: "500",
    },

    loginRow: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: -5,
    },

    loginText: {
        fontSize: 15,
        color: "#555",
    },

    loginLink: {
        fontSize: 15,
        color: "#6E1F29",
        fontWeight: "700",
        textDecorationLine: "underline",
    },
    });
}