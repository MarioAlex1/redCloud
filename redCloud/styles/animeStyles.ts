import { StyleSheet } from "react-native";

export const animeStyles = StyleSheet.create({

    screen: {
        flex: 1,
        backgroundColor: "#000",
    },

    cover: {
        width: "100%",
        height: 420,
    },

    content: {
        paddingHorizontal: 20,
        paddingTop: 20,
    },

    title: {
        color: "#fff",
        fontSize: 28,
        fontWeight: "bold",
    },

    infoRow: {
        flexDirection: "row",
        marginTop: 8,
    },

    infoText: {
        color: "#aaa",
        marginRight: 10,
    },

    description: {
        color: "#ccc",
        marginTop: 15,
        lineHeight: 20,
    },

    /* BOTÕES DE AÇÃO PRINCIPAIS */
    actionRow: {
        flexDirection: "row",
        marginTop: 20,
        justifyContent: "space-between",
    },

    playButton: {
        backgroundColor: "#6E1F29",
        paddingVertical: 10,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        marginRight: 10,
    },

    downloadButton: {
        backgroundColor: "#333",
        paddingVertical: 10,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },

    buttonText: {
        color: "#fff",
        fontSize: 18,
        marginLeft: 10,
    },

    /* AÇÕES SECUNDÁRIAS */
    secondaryActions: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 25,
        marginBottom: 15,
    },

    secondaryItem: {
        alignItems: "center",
    },

    secondaryText: {
        color: "#aaa",
        marginTop: 5,
    },

    /* SELETOR DE TEMPORADAS */
    seasonSelector: {
        backgroundColor: "#111",
        padding: 12,
        borderRadius: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
        marginTop: 10,
    },

    seasonSelectorText: {
        color: "#fff",
        fontSize: 16,
    },

    seasonList: {
        backgroundColor: "#111",
        borderRadius: 8,
        marginBottom: 20,
    },

    seasonItem: {
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#222",
    },

    seasonItemText: {
        color: "#fff",
    },

    /* EPISÓDIOS */
    episodeCard: {
        flexDirection: "row",
        marginBottom: 20,
        backgroundColor: "#111",
        borderRadius: 10,
        padding: 10,
    },

    episodeImage: {
        width: 120,
        height: 70,
        borderRadius: 6,
    },

    episodeInfo: {
        flex: 1,
        marginLeft: 10,
    },

    episodeTitle: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },

    episodeDuration: {
        color: "#888",
        fontSize: 14,
        marginBottom: 5,
    },

    episodeDescription: {
        color: "#ccc",
        fontSize: 13,
    },
});