import { useState } from "react";
import {
  Alert,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function FormularioExemplos() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");

  const [tarefa, setTarefa] = useState("");
  const [prioridade, setPrioridade] = useState("");

  function handleEnviar() {
    console.log("Nome:", nome.trim(), "Idade:", idade.trim());
    setNome("");
    setIdade("");
  }

  function handleAdicionar() {
    if (tarefa.trim() === "") {
      Alert.alert("Atenção", "O nome da tarefa não pode ficar vazio!");
      return;
    }
    console.log(
      "Tarefa:",
      tarefa.trim(),
      "Prioridade:",
      prioridade.trim() || "normal",
    );
    setTarefa("");
    setPrioridade("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Formulários</Text>
      <View style={styles.exemplo}>
        <Text style={styles.subtitulo}>1. Formulário com Envio</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
          placeholder="Seu nome"
        />
        <TextInput
          style={styles.input}
          value={idade}
          onChangeText={setIdade}
          placeholder="Sua idade"
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.botao} onPress={handleEnviar}>
          <Text style={styles.textoBotao}>Enviar</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.titulo}>Validação de Formulários</Text>
      <View style={styles.exemplo}>
        <Text style={styles.subtitulo}>2. Formulário de Adição</Text>
        <TextInput
          style={styles.input}
          value={tarefa}
          onChangeText={setTarefa}
          placeholder="Nome da Tarefa"
        />
        <TextInput
          style={styles.input}
          value={prioridade}
          onChangeText={setPrioridade}
          placeholder="Prioridade (alta, média ou baixa)"
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
