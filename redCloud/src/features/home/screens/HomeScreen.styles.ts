import { StyleSheet } from "react-native";
import { Colors } from "../../../theme/colors";

export function makeHomeStyles(c: Colors) {
    return StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: c.bg,
    },

    ImageContainer: {
        width: "100%",
        height: 600,
    },

    titanImage: {
        width: "100%",
        height: "100%",
        justifyContent: "flex-end",
    },

    coverGradient: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 220,
    },

    overlay: {
        paddingHorizontal: 20,
        paddingBottom: 30,
        position: "absolute",
        bottom: 1,
    },

    buttonsRow: {
        flexDirection: "row",
        gap: 35,
        marginTop: 10,
    },

    buttonPlay: {
        backgroundColor: "#fff",
        flexDirection: "row",
        gap: 6,
        alignItems: "center",
        borderRadius: 999,
        paddingHorizontal: 25,
        paddingVertical: 8,
        left: 10
    },

    buttonPlayText: {
        color: "#000",
        fontSize: 16,
        fontWeight: "600",
    },

    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "500",
    },

    buttonTextMyList: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "500",
        right: 25
    },

    button: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "500",
        left: 30
    },

    //os cards

    section: {
        marginTop: 35,
        paddingHorizontal: 20,
        marginBottom: 20,
    },

    sectionTitle: {
        color: c.text,
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 15,
    },

    cardRow: {
        flexDirection: 'row',
        gap: 20,
        paddingRight: 20, // dá espaço no final
    },

    card: {
        width: 100,
        height: 150,
        borderRadius: 10,
        backgroundColor: c.bgDivider,
    },

    cardWrapper: {
        width: 100,
        marginRight: 0,
    },

    cardTitle: {
        color: c.text,
        fontSize: 11,
        fontWeight: '600',
        marginTop: 6,
        lineHeight: 15,
    },

    cardRating: {
        color: c.primary,
        fontSize: 11,
        fontWeight: '700',
        marginTop: 2,
    },

    loadingContainer: {
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },

    errorContainer: {
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: c.bgCard,
        borderRadius: 10,
        paddingHorizontal: 12,
    },

    errorText: {
        color: c.accent,
        fontSize: 13,
        textAlign: 'center',
    },

    searchButton: {
        position: "absolute",
        top: -450,
        left: 300,
        backgroundColor: "rgba(0,0,0,0.6)",
        padding: 5,
        borderRadius: 50,
        zIndex: 50,
    },
    });
}