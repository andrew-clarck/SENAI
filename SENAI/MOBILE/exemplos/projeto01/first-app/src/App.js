import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ExerSomativa01 from "./somativa_pratica/exer1";
import ExerSomativa02 from "./somativa_pratica/exer2";

export default function App() {
  return (
    <View style={styles.container}>
      <ExerSomativa02 />
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
