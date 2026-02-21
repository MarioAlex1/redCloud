import { View, Text, Image, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { makeSuccessStyles } from "./SuccessScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";
import { useMemo } from "react";

export default function SuccessScreen() {
  const { colors } = useTheme();
  const successStyles = useMemo(() => makeSuccessStyles(colors), [colors]);
  return (
    <View style={successStyles.container}>
      <Image
        source={require("../../../assets/images/success.png")}
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