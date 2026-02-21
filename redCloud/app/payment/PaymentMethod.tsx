import { TouchableOpacity, Text } from "react-native";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { makePaymentStyles } from "../../src/styles/payment.styles";
import { useTheme } from "../../src/theme/ThemeContext";
import { useMemo } from "react";

type Props = {
  id: string;
  label: string;
  selected: boolean;
  onPress: () => void;
};

export default function PaymentMethod({ label, selected, onPress }: Props) {
  const { colors } = useTheme();
  const PaymentStyles = useMemo(() => makePaymentStyles(colors), [colors]);
  function renderIcon() {
    if (label === "Google Play")
      return <Entypo name="google-play" size={28} color={colors.text} />;
    if (label === "Cartão")
      return <MaterialIcons name="credit-card" size={28} color={colors.text} />;
    return <MaterialIcons name="pix" size={32} color={colors.text} />;
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        PaymentStyles.methodRow,
        selected && { backgroundColor: "#262626" },
      ]}
    >
      {renderIcon()}

      <Text style={PaymentStyles.methodText}>{label}</Text>

      <MaterialIcons
        name={selected ? "check-circle" : "circle"}
        size={24}
        color={selected ? "#E50914" : colors.textMuted}
      />
    </TouchableOpacity>
  );
}