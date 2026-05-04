import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FormularioExemplos from "./text_input/formulario";
import FlatListExemplo from "./flat_list/flatlist_example";
import ListaCompras from "./flat_list/exer_lista_compras";

export default function App() {
  return (
    <View style={styles.container}>
      <ListaCompras />
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
