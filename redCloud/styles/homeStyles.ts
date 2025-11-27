import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#000",
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

    overlay: {
        paddingHorizontal: 20,
        paddingBottom: 30,
        position: "absolute",
        bottom: 1,
    },

    search: {
        bottom: 420,
        left: 315
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
        borderRadius: 15,
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
        color: "#fff",
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
        backgroundColor: "#222",
    },

    footer: {
        position: 'absolute',
        bottom: 0,
        width: "100%",
        height: 70,
        backgroundColor: "#6E1F29",
        borderTopColor: "#333",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingBottom: 10,
    },

    footerButton: {
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
    },

})