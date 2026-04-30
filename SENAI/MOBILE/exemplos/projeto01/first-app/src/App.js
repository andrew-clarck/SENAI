import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ContadorExample from "./hooks/useState_example";
import TelaDeLogin from "./hooks/useRef_example";
import TelaMoeda from "./hooks/useEffect_example";
import Recados from "./hooks/recados_exercise";

export default function App() {
  return (
    <View style={styles.container}>
      <Recados />
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
