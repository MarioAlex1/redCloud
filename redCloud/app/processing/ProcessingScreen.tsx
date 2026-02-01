import { View, Text, Image, ActivityIndicator } from "react-native";
import { processingStyles } from "../../src/styles/processing.styles";
import { useProcessing } from "./useProcessing";

export default function ProcessingScreen() {
  useProcessing();

  return (
    <View style={processingStyles.container}>
      <Image
        source={require("../../assets/images/processando.png")}
        style={processingStyles.image}
      />

      <Text style={processingStyles.title}>
        Processando pagamento...
      </Text>

      <ActivityIndicator size="large" color="#E50914" />
    </View>
  );
}