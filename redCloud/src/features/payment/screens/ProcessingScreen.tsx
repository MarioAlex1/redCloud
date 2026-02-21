import { View, Text, Image, ActivityIndicator } from "react-native";
import { makeProcessingStyles } from "./ProcessingScreen.styles";
import { useTheme } from "../../../theme/ThemeContext";
import { useMemo } from "react";
import { useProcessing } from "../hooks/useProcessing";

export default function ProcessingScreen() {
  const { colors } = useTheme();
  const processingStyles = useMemo(() => makeProcessingStyles(colors), [colors]);
  useProcessing();

  return (
    <View style={processingStyles.container}>
      <Image
        source={require("../../../assets/images/processando.png")}
        style={processingStyles.image}
      />

      <Text style={processingStyles.title}>
        Processando pagamento...
      </Text>

      <ActivityIndicator size="large" color="#E50914" />
    </View>
  );
}