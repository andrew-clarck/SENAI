import { View, Text, StyleSheet } from "react-native";

export default function CartaoPerfil(props) {
  return (
    <View style={styles.container}>
        <View style={styles.exemplo}>
            <Text style={styles.textBox}>Nome: {props.nome}</Text>
            <Text style={styles.textBox}>Idade: {props.idade}</Text>
        </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4285f4",
    marginBottom: 8,
  },
  exemplo: {
    width: "80%",
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: "#4285f4",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  textBox: {
    color: "#000",
    fontSize: 12,
    fontWeight: "bold",
  },
});