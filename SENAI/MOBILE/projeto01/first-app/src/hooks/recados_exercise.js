/*
 * ============================================
 * EXERCÍCIO — Componente de Recados
 * ============================================
*/

import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

export default function Recados() {
  const [textoDigitando, setTextoDigitando] = useState("");
  const [recadoEnviado, setRecadoEnviado] = useState("");

  function handleEnviar() {
    setRecadoEnviado(textoDigitando);
    setTextoDigitando("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>📝 Recados</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite sua mensagem..."
        value={textoDigitando}
        onChangeText={(texto) => setTextoDigitando(texto)}
      />

      <TouchableOpacity style={styles.botao} onPress={handleEnviar}>
        <Text style={styles.botaoTexto}>Enviar</Text>
      </TouchableOpacity>

      {recadoEnviado !== "" && (
        <View style={styles.resultado}>
          <Text style={styles.label}>Recado enviado:</Text>
          <Text style={styles.recado}>{recadoEnviado}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 12,
  },
  botao: {
    backgroundColor: "#cc0000",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  botaoTexto: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  resultado: {
    marginTop: 24,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: "#cc0000",
  },
  label: {
    fontSize: 12,
    color: "#888888",
    marginBottom: 4,
  },
  recado: {
    fontSize: 18,
    color: "#222222",
  },
});
