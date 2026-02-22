import { StyleSheet } from "react-native";
import { Colors } from "../../../theme/colors";

export function makeSuccessStyles(c: Colors) {
    return StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: c.bg,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  image: {
    width: 400,
    height: 400,
    marginBottom: 25,
  },

  title: {
    color: c.text,
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },

  subtitle: {
    color: c.textFaint,
    fontSize: 20,
    textAlign: "center",
    marginBottom: 35,
  },

  button: {
    backgroundColor: "#6E1F29",
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 999,
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  });
}