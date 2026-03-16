import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView05() {
  return (
    <View style={[styles.container, {flexDirection: "row"}]}>
        <View style={styles.blueColumn}>
            <Text style={[styles.textStyle]}>Coluna 1</Text>
        </View>
        <View style={styles.greenColumn}>
            <Text style={[styles.textStyle]}>Coluna 2</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 18,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },

  greenColumn: {
    width: 200,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  blueColumn: {
    width: 200,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});