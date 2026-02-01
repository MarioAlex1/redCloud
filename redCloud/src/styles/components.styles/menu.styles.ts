import { StyleSheet } from "react-native";

export const menuFooter = StyleSheet.create({
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