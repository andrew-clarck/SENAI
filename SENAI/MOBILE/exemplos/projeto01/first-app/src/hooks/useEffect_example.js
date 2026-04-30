import { useState, useEffect } from "react";
import { Alert, Button, Text, View, StyleSheet } from "react-native";

export default function TelaMoeda() {
  const [moedas, setMoedas] = useState(0);
  useEffect(() => {
    console.log("Executou, buscando valor de moedas"); // Sempre que moedas atualizar, essa mensagem aparece no console
    if (moedas === 5) {
      Alert.alert("Sucesso, você desbloqueou o baú do tesouro!");
    }
  }, [moedas]);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Moedas coletadas: {moedas}</Text>
      <Button
        title="Pegar moeda"
        onPress={() => setMoedas((moedas) => moedas + 1)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  texto: {
    fontSize: 24,
    marginBottom: 20,
  },
});
