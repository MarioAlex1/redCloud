import { StyleSheet } from "react-native";
import { Colors } from "../../../theme/colors";

export function makeProcessingStyles(c: Colors) {
    return StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: c.bg,
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },

  title: {
    color: c.text,
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
  });
}