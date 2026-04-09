import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Botao({ titulo }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text>{titulo}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    gap: 8,
  },

  textStyle: {
    color: "black",
    fontWeight: "bold",
  },

  button: {
    alignItems: "center",
    width: 100,
    padding: 10,
    backgroundColor: "#dddddd",
    borderRadius: 8,
  },
});
