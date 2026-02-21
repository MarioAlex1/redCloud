import { StyleSheet } from "react-native";
import { Colors } from "../../../theme/colors";

export function makeLoginStyles(c: Colors) {
    return StyleSheet.create({
    background: {
        flex: 1
    },

    topCard: {
        width: "100%",
        height: "100%",
        padding: 20,
        paddingTop: "50%",
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
        bottom: 100
    },

    subtittle: {
        fontSize: 18,
        textAlign: 'center',
        bottom: 80
    },

    input: {
        width: "100%",
        padding: 18,
        backgroundColor: c.inputSurface,
        borderRadius: 20,
        marginBottom: 28,
        fontSize: 16,
    },

    buttonCreate: {
        backgroundColor: "#6E1F29",
        padding: 10,
        borderRadius: 20,
        marginTop: 70,
        width: "50%",
        alignItems: "center",
        alignSelf: "center",
    },

    buttonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
    },

    // estilização do lembre-me

    checkboxRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 8,
    },

    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 10,
    },

    checkboxLabel: {
        fontSize: 16,
        color: "#333",
    },

    forgotPasswordText: {
        fontSize: 16,
        textDecorationLine: "underline",
    },
    });
}