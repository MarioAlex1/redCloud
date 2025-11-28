import { View, Text, Image, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import { router } from "expo-router";

export default function Processing() {

    useEffect(() => {
        // Simula 2.5s de processamento
        const timeout = setTimeout(() => {
            router.replace("/success"); // ou voltar, ou ir pra home
        }, 2500);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <View style={{
            flex: 1,
            backgroundColor: "#000",
            alignItems: "center",
            justifyContent: "center"
        }}>
            
            <Image
                source={require("../assets/images/processando.png")} // sua imagem
                style={{ width: 200, height: 200, marginBottom: 30 }}
            />

            <Text style={{
                color: "#fff",
                fontSize: 22,
                fontWeight: "bold",
                marginBottom: 15
            }}>
                Processando pagamento...
            </Text>

            <ActivityIndicator size="large" color="#E50914" />
        </View>
    );
}