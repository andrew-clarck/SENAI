import { StyleSheet, Text, View } from "react-native";

export default function ExercicioProp02({ nome, email }) {
  return (
    <View style={styles.container}>
      <View style={styles.caixaConteudo}>
        <Text style={styles.textStyle}>{nome}</Text>
        <Text style={styles.textStyle}>{email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    gap: 8,
  },

  textStyle: {
    color: "black",
    fontWeight: "bold",
  },

  caixaConteudo: {
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
});
