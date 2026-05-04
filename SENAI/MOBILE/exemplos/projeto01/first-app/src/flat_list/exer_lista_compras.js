import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Alert,
  TextInput,
  TouchableOpacity,
} from "react-native";
import CardProduto from "./card_item_lista_compras";

export default function ListaCompras() {
  const [listaCompras, setCompras] = useState("");
  const [nomeProduto, setNomeProduto] = useState("");
  const [quantidade, setQuantidade] = useState("");

  function handleAdicionar() {
    if (nomeProduto.trim() === "" || quantidade.trim() === "") {
      Alert.alert("Nenhum campo pode estar vazio!");
      return;
    }
    const novoProduto = {
      id: Date.now().toString(),
      nome: nomeProduto.trim(),
    };

    setCompras([...listaCompras, novoProduto]);

    setNomeProduto("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Compras</Text>
      <View style={styles.caixa}>
        <FlatList
          data={listaCompras}
          keyExtractor={(produto) => produto.id}
          renderItem={({ item: produto }) => (
            <CardProduto nome={produto.nome} />
          )}
          ListEmptyComponent={
            <Text>Sua lista está vazia. Adicione um produto!</Text>
          }
        />
      </View>
      <View style={styles.caixa}>
        <TextInput
          style={styles.input}
          value={nomeProduto}
          onChangeText={setNomeProduto}
          placeholder="Nome do Produto"
        />
        <TouchableOpacity style={styles.botao} onPress={handleAdicionar}>
          <Text style={styles.textoBotao}>Adicionar</Text>
        </TouchableOpacity>
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

  caixa: {
    width: "80%",
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },

  botao: {
    backgroundColor: "#4285f4",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 4,
  },

  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
  },
});
