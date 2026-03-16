import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView08() {
  return (
    <View style={styles.container}>
      <View style={styles.containerSidebar}>
        <View style={styles.sideBox}>
          <Text style={styles.textStyle}>Sidebar</Text>
        </View>
      </View>

      <View style={styles.containerConteudo}>
        <View style={styles.greenBox}>
          <Text style={styles.textStyle}>Card 1</Text>
        </View>

        <View style={styles.orangeBox}>
          <Text style={styles.textStyle}>Card 2</Text>
        </View>

        <View style={styles.blueBox}>
          <Text style={styles.textStyle}>Card 3</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },

  containerSidebar: {
  },

  containerConteudo: {
    flex: 1,
    padding: 10,
    gap: 10,
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  sideBox: {
    flex: 1,
    width: 80,

    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
  greenBox: {
    height: 100,
    flex: 1,

    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  blueBox: {
    height: 100,
    flex: 1,

    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },

  orangeBox: {
    height: 100,
    flex: 1,

    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
});
