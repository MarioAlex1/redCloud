import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { PlanStyles } from "../styles/planStyles";
import { Link } from "expo-router";

export default function Plan() {
    return (
        <>
            <ScrollView style={{ flex: 1, backgroundColor: "#000" }}>

                {/* Imagem de topo */}
                <Image
                    source={require("../assets/images/primebanner.png")}
                    style={PlanStyles.topImage}
                />

                {/* Título */}
                <Text style={PlanStyles.title}>Assinatura Prime</Text>

                {/* Lista de vantagens */}
                <View style={PlanStyles.benefitsContainer}>

                    <View style={PlanStyles.row}>
                        <Feather name="star" size={22} color="#FFD700" />
                        <Text style={PlanStyles.text}>Preço acessível</Text>
                    </View>

                    <View style={PlanStyles.row}>
                        <Feather name="star" size={22} color="#FFD700" />
                        <Text style={PlanStyles.text}>Downloads ilimitados</Text>
                    </View>

                    <View style={PlanStyles.row}>
                        <Feather name="star" size={22} color="#FFD700" />
                        <Text style={PlanStyles.text}>Assista sem anúncios</Text>
                    </View>

                    <View style={PlanStyles.row}>
                        <Feather name="star" size={22} color="#FFD700" />
                        <Text style={PlanStyles.text}>Ícone de membro personalizado</Text>
                    </View>

                </View>

                {/* Botão de inscrição */}
                <Link href="/payment" asChild>
                    <TouchableOpacity style={PlanStyles.subscribeButton}>
                        <Text style={PlanStyles.subscribeButtonText}>Inscreva-se</Text>
                    </TouchableOpacity>
                </Link>

            </ScrollView>
        </>
    );
}