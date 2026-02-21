import { StyleSheet } from "react-native";
import { Colors } from "../../theme/colors";

export function makeSocialStyles(_c: Colors) {
    return StyleSheet.create({
  message: {
    top: 35,
    fontSize: 16,
    alignSelf: 'center',
    color: "gray",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginTop: 40,
  },
  button: {
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  });
}