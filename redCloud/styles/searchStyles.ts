import { StyleSheet } from "react-native";

export const SearchStyles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#000",
        paddingHorizontal: 20,
        paddingTop: 30,
    },

    searchBar: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#1a1a1a",
        borderRadius: 12,
        paddingHorizontal: 15,
        height: 50,
        marginBottom: 20,
        marginTop: 60
    },

    searchInput: {
        flex: 1,
        color: "#fff",
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
        color: "#fff",
        fontSize: 22,
        fontWeight: "bold",
    },

    listContainer: {
        gap: 10,
    },

    listItem: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#6E1F29",
        paddingVertical: 12,
        paddingLeft: 8,
        paddingRight: 20,
        borderRadius: 12,
    },

    itemImage: {
        width: 60,
        height: 60,
        backgroundColor: "#333",
        borderRadius: 8,
        marginRight: 15,
    },

    itemTitle: {
        flex: 1,
        color: "#fff",
        fontSize: 16,
        fontWeight: "500",
    },

});
