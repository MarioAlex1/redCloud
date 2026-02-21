import { View, TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import { socialStyles } from "../styles/components.styles/social.styles";

interface SocialButtonsProps {
  message?: string;
}

export default function SocialButtons({ message = "Ou continue com" }: SocialButtonsProps) {
  return (
    <>
      <Text style={socialStyles.message}>{message}</Text>

      <View style={socialStyles.buttonsContainer}>
        <TouchableOpacity style={socialStyles.button}>
          <FontAwesome name="facebook" size={50} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={socialStyles.button}>
          <AntDesign name="google" size={50} color="black" />
        </TouchableOpacity>
      </View>
    </>
  );
}