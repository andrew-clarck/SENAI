import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView07() {
  return (
    <View style={[styles.container, { padding: 20 }]}>
      <View style={[styles.container, { flexDirection: "row" }]}>
        <View style={styles.greenBox}></View>
        <View style={styles.redBox}></View>
      </View>
      <View style={[styles.container, { flexDirection: "row" }]}>
        <View style={styles.blueBox}></View>
        <View style={styles.orangeBox}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  redBox: {
    flex: 1,

    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  greenBox: {
    flex: 1,

    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  blueBox: {
    flex: 1,

    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },

  orangeBox: {
    flex: 1,

    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
});
