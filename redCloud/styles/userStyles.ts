import { StyleSheet } from "react-native";

export const UserStyles = StyleSheet.create({
    title: {
        color: '#fff',
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

    profilePic: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 2,
    },

    container: {
        backgroundColor: '#D9D9D9',
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 40,
        paddingVertical: 10,
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
        backgroundColor: '#6E1F29',
        width: 150,
        alignSelf: 'center',
        marginHorizontal: 20,
        borderRadius: 18,
        paddingVertical: 12,
        alignItems: 'center',
        marginTop: 10,
    },

    logoutButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
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