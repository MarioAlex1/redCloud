import { StyleSheet } from "react-native";

export const PaymentStyles = StyleSheet.create({
    title: {
        color: "#fff",
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
        color: "#fff",
        fontSize: 16,
        marginBottom: 10,
    },

    input: {
        backgroundColor: "#111",
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 12,
        color: "#fff",
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#333",
        marginBottom: 30
    },

    methodsContainer: {
        backgroundColor: "#1a1a1a",
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
        color: "#fff",
        fontSize: 16,
        flex: 1,
        marginLeft: 15,
    },

    paymentContainer: {
        marginHorizontal: 20,
        marginBottom: 50,
        backgroundColor: "#1a1a1a",
        borderRadius: 12,
        padding: 20,
    },

    totalText: {
        color: "#aaa",
        fontSize: 15,
        marginBottom: 10,
    },

    payRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    price: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
    },

    payButton: {
        backgroundColor: "#6E1F29",
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 25,
    },

    payButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});