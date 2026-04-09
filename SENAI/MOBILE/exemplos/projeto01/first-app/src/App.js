import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ExemploState from "./jsx_hooks_examples/usestate_example";

export default function App() {
  return (
    <View style={styles.container}>
      <ExemploState />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
  },
});
