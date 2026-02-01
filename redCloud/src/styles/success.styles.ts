import { StyleSheet } from "react-native";

export const successStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
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
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },

  subtitle: {
    color: "#ccc",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 35,
  },

  button: {
    backgroundColor: "#6E1F29",
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 15,
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});