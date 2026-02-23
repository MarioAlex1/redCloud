import { StyleSheet } from "react-native";
import { Colors } from "../../theme/colors";

export function makeSocialStyles(_c: Colors) {
    return StyleSheet.create({
  message: {
    marginTop: 20,
    fontSize: 16,
    alignSelf: 'center',
    color: "gray",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginTop: 3,
    marginBottom: 10,
  },
  button: {
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  });
}