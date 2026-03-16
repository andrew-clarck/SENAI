import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView10() {
  return (
    <View style={[styles.container, { flex: 1 }]}>
      <View style={styles.headerBox}>
        <Text style={[{ color: "white", fontWeight: "bold" }]}>Header</Text>
      </View>

      <View style={[styles.container, { flexDirection: "row" }]}>
        <View style={styles.redBox}>
          <Text style={styles.textStyle}>1</Text>
        </View>

        <View style={styles.blueBox}>
          <Text style={styles.textStyle}>2</Text>
        </View>

        <View style={styles.yellowBox}>
          <Text style={styles.textStyle}>3</Text>
        </View>
      </View>

      <View style={[styles.container, { flexDirection: "row", flex: 1 }]}>
        <View style={styles.principalBox}>
          <Text style={styles.textStyle}>Painel Principal</Text>
        </View>
        <View style={styles.sideBox}>
          <Text style={styles.textStyle}>Lateral</Text>
        </View>
      </View>

      <View style={styles.footerBox}>
        <Text style={[{ color: "white", fontWeight: "bold" }]}>Footer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },

  textStyle: {
    color: "black",
    fontWeight: "bold",
  },

  headerBox: {
    height: 50,

    backgroundColor: "darkblue",
    alignItems: "center",
    justifyContent: "center",
  },

  redBox: {
    height: 80,
    flex: 1,
    borderRadius: 10,

    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },

  blueBox: {
    height: 80,
    flex: 1,
    borderRadius: 10,

    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },

  yellowBox: {
    height: 80,
    flex: 1,
    borderRadius: 10,

    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },

  principalBox: {
    flex: 2,
    borderRadius: 10,

    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },

  sideBox: {
    flex: 1,
    borderRadius: 10,

    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
  },

  footerBox: {
    height: 40,

    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});
