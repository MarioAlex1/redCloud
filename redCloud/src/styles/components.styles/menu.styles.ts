import { StyleSheet } from "react-native";
import { Colors } from "../../theme/colors";

export function makeMenuFooter(c: Colors) {
    return StyleSheet.create({
    footer: {
        position: 'absolute',
        bottom: 0,
        width: "100%",
        height: 70,
        backgroundColor: c.brand,
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
    iconWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 55,
        height: 44,
        borderRadius: 22,
    },

    activeShadow: {
        backgroundColor: 'rgba(255,255,255,0.06)',
    },
    });
}