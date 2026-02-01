import { View, Text, Image, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { successStyles } from "../../src/styles/success.styles";

export default function SuccessScreen() {
  return (
    <View style={successStyles.container}>
      <Image
        source={require("../../assets/images/success.png")}
        style={successStyles.image}
        resizeMode="contain"
      />

      <Text style={successStyles.title}>Parabéns!</Text>

      <Text style={successStyles.subtitle}>
        Sua assinatura Prime está ativa.
      </Text>

      <TouchableOpacity
        style={successStyles.button}
        onPress={() => router.replace("/home")}
      >
        <Text style={successStyles.buttonText}>Bora assistir</Text>
      </TouchableOpacity>
    </View>
  );
}