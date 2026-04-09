import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function ExemploState() {
  const [count, setCount] = useState(0);

  function clique() {
    setCount(count + 1);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={clique}>
        <Text style={styles.textStyle}>Clique Aqui!</Text>
      </TouchableOpacity>
      <Text style={styles.textStyle}>Você clicou no botão {count} vezes</Text>
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
