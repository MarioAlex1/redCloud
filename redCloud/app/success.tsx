import { View, Text, Image, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function Success() {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#000",
                alignItems: "center",
                justifyContent: "center",
                paddingHorizontal: 20
            }}
        >

            {/* IMAGEM DE SUCESSO */}
            <Image
                source={require("../assets/images/success.png")} // coloque sua imagem aqui
                style={{ width: 400, height: 400, marginBottom: 25 }}
                resizeMode="contain"
            />

            {/* PARABÉNS */}
            <Text
                style={{
                    color: "#fff",
                    fontSize: 28,
                    fontWeight: "bold",
                    marginBottom: 10,
                }}
            >
                Parabéns!
            </Text>

            {/* TEXTO DA ASSINATURA */}
            <Text
                style={{
                    color: "#ccc",
                    fontSize: 20,
                    textAlign: "center",
                    marginBottom: 35,
                }}
            >
                Sua assinatura Prime está ativa.
            </Text>

            {/* BOTÃO */}
            <TouchableOpacity
                onPress={() => router.replace("/home")}
                style={{
                    backgroundColor: "#6E1F29",
                    paddingVertical: 12,
                    paddingHorizontal: 35,
                    borderRadius: 15,
                }}
            >
                <Text
                    style={{
                        color: "#fff",
                        fontSize: 18,
                        fontWeight: "600",
                    }}
                >
                    Bora assistir
                </Text>
            </TouchableOpacity>

        </View>
    );
}