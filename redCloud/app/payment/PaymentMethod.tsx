import { TouchableOpacity, Text } from "react-native";
import { Feather, FontAwesome, Entypo, MaterialIcons } from "@expo/vector-icons";
import { PaymentStyles } from "../../src/styles/payment.styles";

type Props = {
  id: string;
  label: string;
  selected: boolean;
  onPress: () => void;
};

export function PaymentMethod({ label, selected, onPress }: Props) {
  function renderIcon() {
    if (label === "Google Play")
      return <Entypo name="google-play" size={28} color="#fff" />;
    if (label === "Mastercard")
      return <FontAwesome name="cc-mastercard" size={28} color="#fff" />;
    return <MaterialIcons name="pix" size={32} color="#fff" />;
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

      <Feather
        name={selected ? "check-circle" : "circle"}
        size={24}
        color={selected ? "#E50914" : "#888"}
      />
    </TouchableOpacity>
  );
}