import { StyleSheet } from "react-native";
import { Colors } from "../../../theme/colors";

export function makePaymentStyles(c: Colors) {
    return StyleSheet.create({
    title: {
        color: c.text,
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 100,
        marginBottom: 60,
        textAlign: "center",
    },

    giftContainer: {
        marginHorizontal: 20,
        marginBottom: 25,
    },

    label: {
        color: c.text,
        fontSize: 16,
        marginBottom: 10,
    },

    input: {
        backgroundColor: c.bgInput,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 12,
        color: c.text,
        fontSize: 16,
        borderWidth: 1,
        borderColor: c.bgChip,
        marginBottom: 30
    },

    methodsContainer: {
        backgroundColor: c.bgCard,
        marginHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        marginBottom: 50,
    },

    methodRow: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 18,
        justifyContent: "space-between",
        borderRadius: 10,
    },

    methodText: {
        color: c.text,
        fontSize: 16,
        flex: 1,
        marginLeft: 15,
    },

    paymentContainer: {
        marginHorizontal: 20,
        marginBottom: 50,
        backgroundColor: c.bgCard,
        borderRadius: 12,
        padding: 20,
    },

    totalText: {
        color: c.textSub,
        fontSize: 15,
        marginBottom: 10,
    },

    payRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    price: {
        color: c.text,
        fontSize: 24,
        fontWeight: "bold",
    },

    payButton: {
        backgroundColor: "#6E1F29",
        borderRadius: 999,
        paddingVertical: 10,
        paddingHorizontal: 25,
    },

    payButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    });
}