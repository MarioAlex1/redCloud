import { StyleSheet } from "react-native";
import { Colors } from "../../../theme/colors";

export function makeUserStyles(c: Colors, isDark = true) {
    return StyleSheet.create({
    title: {
        color: c.text,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 90,
        marginBottom: 20,
    },

    profilePicContainer: {
        alignItems: 'center',
        marginBottom: 40,
    },

    nicknameText: {
        color: c.text,
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 12,
    },

    profilePic: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 2,
    },

    container: {
        backgroundColor: c.surface,
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 40,
        paddingVertical: 10,
        ...(isDark ? {} : {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.12,
            shadowRadius: 6,
            elevation: 4,
        }),
    },

    optionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 15,
    },

    optionText: {
        color: '#000',
        fontSize: 16,
    },

    logoutButton: {
        backgroundColor: c.primary,
        width: 150,
        alignSelf: 'center',
        marginHorizontal: 20,
        borderRadius: 999,
        paddingVertical: 12,
        alignItems: 'center',
        marginTop: 10,
    },

    logoutButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },

    // Modal de confirmação de logout
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.55)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    modalCard: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 28,
        width: '80%',
        alignItems: 'center',
    },

    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#111',
        marginBottom: 8,
    },

    modalSubtitle: {
        fontSize: 15,
        color: '#555',
        textAlign: 'center',
        marginBottom: 24,
    },

    modalButtons: {
        flexDirection: 'row',
        gap: 12,
    },

    modalButtonCancel: {
        flex: 1,
        paddingVertical: 12,
        borderRadius: 999,
        borderWidth: 1,
        borderColor: c.primary,
        alignItems: 'center',
    },

    modalButtonCancelText: {
        color: c.primary,
        fontWeight: '600',
        fontSize: 15,
    },

    modalButtonConfirm: {
        flex: 1,
        paddingVertical: 12,
        borderRadius: 999,
        backgroundColor: c.primary,
        alignItems: 'center',
    },

    modalButtonConfirmText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 15,
    },
    });
}