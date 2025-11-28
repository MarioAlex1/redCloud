import { StyleSheet } from "react-native";

export const PlanStyles = StyleSheet.create({
    topImage: {
        width: "100%",
        height: "60%",
        resizeMode: "cover",
        marginTop: 80
    },

    title: {
        textAlign: "center",
        color: "#fff",
        fontSize: 26,
        fontWeight: "bold",
        marginTop: 30,
        marginBottom: 20,
    },

    benefitsContainer: {
        backgroundColor: "#1a1a1a",
        marginHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 12,
        gap: 20,
    },

    row: {
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
        paddingHorizontal: 20,
    },

    text: {
        color: "#fff",
        fontSize: 16,
    },

    subscribeButton: {
        backgroundColor: "#6E1F29",
        marginTop: 30,
        marginBottom: 50,
        alignSelf: "center",
        width: 180,
        paddingVertical: 14,
        borderRadius: 20,
        alignItems: "center",
    },

    subscribeButtonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});