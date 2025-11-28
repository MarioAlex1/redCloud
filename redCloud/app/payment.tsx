import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { Feather, FontAwesome, Entypo, MaterialIcons } from "@expo/vector-icons";
import { PaymentStyles } from "../styles/paymentStyles";
import { router } from "expo-router";

export default function Payment() {
    const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
    const [giftCode, setGiftCode] = useState("");

    const methods = [
        { id: "google", label: "Google Play", icon: <Entypo name="google-play" size={28} color="#fff" /> },
        { id: "mastercard", label: "Mastercard", icon: <FontAwesome name="cc-mastercard" size={28} color="#fff" /> },
        { id: "pix", label: "Pix", icon: <MaterialIcons name="pix" size={32} color="#fff" /> },
    ];

    const handlePay = () => {
        if (!selectedMethod) return;
        router.push("/processing");
    };

    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#000" }}>
            <Text style={PaymentStyles.title}>Forma de Pagamento</Text>

            <View style={PaymentStyles.giftContainer}>
                <Text style={PaymentStyles.label}>Código do cartão-presente</Text>
                <TextInput
                    style={PaymentStyles.input}
                    placeholder="Digite o código"
                    placeholderTextColor="#666"
                    value={giftCode}
                    onChangeText={setGiftCode}
                />
            </View>

            <View style={PaymentStyles.methodsContainer}>
                {methods.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        style={[
                            PaymentStyles.methodRow,
                            selectedMethod === item.id && { backgroundColor: "#262626" }
                        ]}
                        onPress={() => setSelectedMethod(item.id)}
                    >
                        {item.icon}
                        <Text style={PaymentStyles.methodText}>{item.label}</Text>

                        <Feather
                            name={selectedMethod === item.id ? "check-circle" : "circle"}
                            size={24}
                            color={selectedMethod === item.id ? "#E50914" : "#888"}
                        />
                    </TouchableOpacity>
                ))}
            </View>

            <View style={PaymentStyles.paymentContainer}>
                <Text style={PaymentStyles.totalText}>Total</Text>

                <View style={PaymentStyles.payRow}>
                    <Text style={PaymentStyles.price}>R$ 10,00</Text>

                    <TouchableOpacity
                        style={[
                            PaymentStyles.payButton,
                            !selectedMethod && { opacity: 0.5 }
                        ]}
                        disabled={!selectedMethod}
                        onPress={handlePay}
                    >
                        <Text style={PaymentStyles.payButtonText}>Pagar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}