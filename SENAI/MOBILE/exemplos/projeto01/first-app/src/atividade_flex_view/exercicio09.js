import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView09() {
  return (
    <View style={styles.container}>
      <View style={styles.containerSemaforo}>
        <View style={styles.redBox}></View>
        <View style={styles.yellowBox}></View>
        <View style={styles.greenBox}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  containerSemaforo: {
    alignItems: "center",
    justifyContent: "space-evenly",
    height: 350,
    width: 150,
    borderRadius: 15,
    padding: 10,
    backgroundColor: "black",
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  redBox: {
    height: 80,
    width: 80,
    borderRadius: 40,

    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  greenBox: {
    height: 80,
    width: 80,
    borderRadius: 40,

    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  yellowBox: {
    height: 80,
    width: 80,
    borderRadius: 40,

    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
});
