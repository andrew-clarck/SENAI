import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AtividadeSomativa01 from "./somativa_pratica/exer12_somativa_andrewclarck";
import AtividadeSomativa02 from "./somativa_pratica/exer13_somativa_andrewclarck";

export default function App() {
  return (
    <View style={styles.container}>
      <AtividadeSomativa02 />
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
