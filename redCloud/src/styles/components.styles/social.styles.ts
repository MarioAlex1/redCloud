import { StyleSheet } from "react-native";

export const socialStyles = StyleSheet.create({
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