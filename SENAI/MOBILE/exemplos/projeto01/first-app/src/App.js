import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ExercicioView01 from "./atividade_flex_view/exercicio01";
import ExercicioView02 from "./atividade_flex_view/exercicio02";
import ExercicioView03 from "./atividade_flex_view/exercicio03";
import ExercicioView04 from "./atividade_flex_view/exercicio04";
import ExercicioView05 from "./atividade_flex_view/exercicio05";
import ExercicioView06 from "./atividade_flex_view/exercicio06";
import ExercicioView07 from "./atividade_flex_view/exercicio07";
import ExercicioView08 from "./atividade_flex_view/exercicio08";
import ExercicioView09 from "./atividade_flex_view/exercicio09";
import ExercicioView10 from "./atividade_flex_view/exercicio10";

export default function App() {
  return (
    <View style={styles.container}>
      <ExercicioView10 />
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
