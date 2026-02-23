// ============================================
// Arquivo Base
// ============================================

import { View, Text, StyleSheet } from "react-native";

export default function Exemplo02() {
  const nome = "Nathállya";
  const idade = 16;
  const preco = 39.9;

  const usuario = {
    nome: "Melissa",
    cidade: "Salto",
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>1. Variáveis</Text>
      <Text style={styles.subtitulo}>Variáveis Comuns</Text>
      <View style={styles.exemplo}>
        <Text>Nome: {nome.toUpperCase()}</Text>
        <Text>Idade: {idade}</Text>
        <Text>Preço: {preco.toFixed(2)}</Text>
      </View>
      <View style={styles.exemplo}>
        <Text>Nome: {usuario.nome}</Text>
        <Text>Cidade: {usuario.cidade}</Text>
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
});
