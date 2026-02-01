import { StyleSheet } from "react-native"

export const registerStyles = StyleSheet.create({
    background: {
        flex: 1
    },

    topCard: {
        width: "100%",
        height: "100%",
        padding: 20,
        paddingTop: "50%",
        backgroundColor: "#D9D9D9", // branco acinzentado
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
        backgroundColor: "#FFFDFD",
        borderRadius: 20,
        marginBottom: 12,
        fontSize: 16,
    },

    buttonCreate: {
        backgroundColor: "#6E1F29",
        padding: 10,
        borderRadius: 20,
        marginTop: 30,
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
        color: "#333",
    },
})