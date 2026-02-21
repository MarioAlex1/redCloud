import { StyleSheet } from "react-native";
import { Colors } from "../../theme/colors";

export function makeMenuFooter(c: Colors) {
    return StyleSheet.create({
    footer: {
        position: 'absolute',
        bottom: 0,
        width: "100%",
        height: 80,
        backgroundColor: c.brand,
        borderTopWidth: 1,
        borderTopColor: "rgba(255,255,255,0.12)",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingBottom: 8,
    },

    footerButton: {
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
    },
    iconWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 36,
        borderRadius: 18,
    },

    activeShadow: {
        backgroundColor: 'rgba(255,255,255,0.06)',
    },
    tabLabel: {
        fontSize: 10,
        marginTop: 2,
    },
    });
}