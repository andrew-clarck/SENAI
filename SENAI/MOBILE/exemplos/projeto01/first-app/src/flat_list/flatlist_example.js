import { View, Text, StyleSheet, FlatList } from "react-native";
import CardItem from "./card_item";

export default function FlatListExemplo() {
  const alunos = [
    { id: "1", nome: "Ricardo", nota: 3.5 },
    { id: "2", nome: "Matheus", nota: 6.5 },
    { id: "3", nome: "Pedro", nota: 7.0 },
    { id: "4", nome: "Enzo", nota: 8.0 },
    { id: "5", nome: "Fernando", nota: 4.0 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>FlatList</Text>
      <View style={styles.exemploLista}>
        <Text style={styles.subtitulo}>1. FlatList Básico</Text>
        {/* Componente do renderItem feito no card_item.js */}
        <FlatList
          scrollEnabled={true}
          data={alunos}
          keyExtractor={(aluno) => aluno.id}
          renderItem={({ item: aluno }) => (
            <CardItem nome={aluno.nome} nota={aluno.nota} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    paddingTop: 60,
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

  exemploLista: {
    width: "80%",
    height: 150,
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
});
