import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const initialStyles = StyleSheet.create({
    background: {
        flex: 1, //faz a imagem aparecer na tela
        width,
        height,
    },

    skipContainer: { //container do skip
        position: "absolute",
        top: "10%",
        right: "10%",
    },

    skipText: {
        color: "#ffff",
    },

    buttonsContainer: { //isso controla o posicionamento dos botões
        position: "absolute",
        bottom: "10%",
        width: "100%",
        alignItems: "center",
        gap: 15,
    },

    buttonLogin: { //esse e o de baixo controla a estetica dos botões
        width: "65%",
        padding: 10,
        borderRadius: 30,
        backgroundColor: "rgba(255, 26, 26, 0.59)",
        alignItems: "center",
    },

    buttonRegister: {
        width: "65%",
        padding: 10,
        borderRadius: 30,
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        alignItems: "center",
    },

    buttonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#ffff",
    },

    buttonTextRegister: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#0000",
    }
});