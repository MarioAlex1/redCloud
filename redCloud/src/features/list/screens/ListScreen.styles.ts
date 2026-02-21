import { StyleSheet } from 'react-native';
import { Colors } from '../../../theme/colors';

export function makeListStyles(c: Colors) {
    return StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 70,
        paddingHorizontal: 20,
        paddingBottom: 20,
        backgroundColor: c.bg,
    },

    title: {
        color: c.text,
        fontSize: 22,
        fontWeight: 'bold',
    },

    searchBar: {
        backgroundColor: c.bgCard,
        marginHorizontal: 20,
        borderRadius: 12,
        paddingHorizontal: 10,
        marginBottom: 10,
        height: 45,
        justifyContent: 'center',
    },

    searchInput: {
        color: c.text,
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
        backgroundColor: c.bgChip,
    },

    activeOption: {
        backgroundColor: '#6E1F29',
    },

    optionText: {
        color: c.text,
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
        color: c.text,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },

    emptySubtitle: {
        color: c.textSub,
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
    });
}