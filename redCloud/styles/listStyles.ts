import { StyleSheet } from 'react-native';

export const ListStyles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 70, // aumenta o espaço do topo
        paddingHorizontal: 20,
        paddingBottom: 20,
        backgroundColor: '#000',
    },

    title: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
    },

    searchBar: {
        backgroundColor: '#1a1a1a',
        marginHorizontal: 20,
        borderRadius: 12,
        paddingHorizontal: 10,
        marginBottom: 10,
        height: 45,
        justifyContent: 'center',
    },

    searchInput: {
        color: '#fff',
        fontSize: 16,
    },

    optionsRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
    },

    optionButton: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
        backgroundColor: '#333',
    },

    activeOption: {
        backgroundColor: '#6E1F29',
    },

    optionText: {
        color: '#fff',
        fontWeight: 'bold',
    },

    listContainer: {
        paddingHorizontal: 20,
        paddingTop: 30,
    },

    emptyContainer: {
        alignItems: 'center',
        marginTop: 50,
    },

    emptyImage: {
        width: 250,
        height: 250,
        marginBottom: 20,
    },

    emptyTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },

    emptySubtitle: {
        color: '#aaa',
        fontSize: 15,
        marginBottom: 20,
    },

    addButton: {
        backgroundColor: '#6E1F29',
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 12,
    },

    addButtonText: {
        color: '#fff',
        fontWeight: 'bold',
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
});