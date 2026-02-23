import { StyleSheet } from "react-native";
import { Colors } from "../../../theme/colors";

export function makeSearchStyles(c: Colors) {
    return StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: c.bg,
        paddingHorizontal: 20,
        paddingTop: 30,
    },

    searchBar: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: c.bgCard,
        borderRadius: 25,
        paddingHorizontal: 15,
        height: 50,
        marginBottom: 20,
        marginTop: 60
    },

    searchInput: {
        flex: 1,
        color: c.text,
        fontSize: 16,
    },

    voiceButton: {
        padding: 6,
    },

    titleContainer: {
        marginTop: 20,
        marginBottom: 20,
    },

    title: {
        color: c.text,
        fontSize: 22,
        fontWeight: "bold",
    },

    listContainer: {
        gap: 10,
    },

    listItem: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: c.primary,
        paddingVertical: 0,
        paddingLeft: 0,
        paddingRight: 20,
        borderRadius: 30,
        overflow: "hidden",
        height: 64,
    },

    itemImage: {
        width: 64,
        height: 64,
        backgroundColor: c.bgChip,
        borderRadius: 0,
        marginRight: 15,
    },

    itemTitle: {
        flex: 1,
        color: "white",
        fontSize: 16,
        fontWeight: "500",
    },

    // grid de cards
    gridRow: {
        justifyContent: 'space-between',
        marginBottom: 16,
    },

    gridCard: {
        width: '31%',
    },

    gridImage: {
        width: '100%',
        aspectRatio: 2 / 3,
        borderRadius: 10,
        backgroundColor: c.bgDivider,
    },

    gridTitle: {
        color: c.text,
        fontSize: 11,
        fontWeight: '600',
        marginTop: 5,
        lineHeight: 15,
    },

    gridRating: {
        color: c.primary,
        fontSize: 11,
        fontWeight: '700',
        marginTop: 2,
    },

    errorContainer: {
        marginTop: 20,
        padding: 16,
        backgroundColor: c.bgCard,
        borderRadius: 10,
        alignItems: 'center',
    },

    errorText: {
        color: c.accent,
        fontSize: 13,
        textAlign: 'center',
    },

    });
}
