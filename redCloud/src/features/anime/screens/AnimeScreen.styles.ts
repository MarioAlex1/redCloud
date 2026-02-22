import { StyleSheet } from "react-native";
import { Colors } from "../../../theme/colors";

export function makeAnimeStyles(c: Colors) {
    return StyleSheet.create({

    screen: {
        flex: 1,
        backgroundColor: c.bg,
    },

    coverContainer: {
        width: "100%",
        height: 420,
    },

    cover: {
        width: "100%",
        height: 420,
    },

    coverGradient: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 220,
    },

    content: {
        paddingHorizontal: 20,
        paddingTop: 20,
    },

    title: {
        color: c.text,
        fontSize: 28,
        fontWeight: "bold",
    },

    infoRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 10,
        gap: 8,
    },

    infoChip: {
        borderWidth: 1,
        borderColor: c.textSub,
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 4,
    },

    infoText: {
        color: c.textSub,
        fontSize: 13,
    },

    description: {
        color: c.textFaint,
        marginTop: 15,
        lineHeight: 20,
    },

    /* BOTÕES DE AÇÃO PRINCIPAIS */
    actionRow: {
        flexDirection: "row",
        marginTop: 20,
        marginHorizontal: 20,
        justifyContent: "space-between",
    },

    playButton: {
        backgroundColor: c.primary,
        paddingVertical: 10,
        borderRadius: 999,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        marginRight: 10,
    },

    downloadButton: {
        backgroundColor: c.bgChip,
        paddingVertical: 10,
        borderRadius: 999,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },

    buttonText: {
        color: "white",
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
        color: c.textSub,
        marginTop: 5,
    },

    likedButton: {
        borderColor: c.accent,
    },

    /* SELETOR DE TEMPORADAS */
    seasonSelector: {
        backgroundColor: c.bgInput,
        padding: 12,
        borderRadius: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
        marginTop: 10,
    },

    seasonSelectorText: {
        color: c.text,
        fontSize: 16,
    },

    seasonList: {
        backgroundColor: c.bgInput,
        borderRadius: 8,
        marginBottom: 20,
    },

    seasonItem: {
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: c.bgDivider,
    },

    seasonItemText: {
        color: c.text,
    },

    /* EPISÓDIOS */
    episodeCard: {
        flexDirection: "row",
        marginBottom: 20,
        backgroundColor: c.bgInput,
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
        color: c.text,
        fontSize: 16,
        fontWeight: "bold",
    },

    episodeDuration: {
        color: c.textMuted,
        fontSize: 14,
        marginBottom: 5,
    },

    episodeDescription: {
        color: c.textFaint,
        fontSize: 13,
    },
    });
}