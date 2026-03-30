import { StyleSheet, Text, View } from "react-native";

export default function ExerSomativa01() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTopo}>
        <View style={styles.blueBox}>
          <Text style={styles.textStyle}>Azul</Text>
        </View>

        <View style={styles.redBox}>
          <Text style={styles.textStyle}>Vermelho</Text>
        </View>

        <View style={styles.greenBox}>
          <Text style={styles.textStyle}>Verde</Text>
        </View>
      </View>

      <View style={styles.containerCentral}>
        <Text style={styles.textStyle}>Laranja</Text>
      </View>

      <View style={styles.containerFundo}>
        <View style={styles.purpleBox}>
          <Text style={styles.textStyle}>Roxo</Text>
        </View>

        <View style={styles.grayBox}>
          <Text style={styles.textStyle}>Cinza</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    gap: 8,
  },

  containerTopo: {
    flexDirection: "row",
    height: 120,
    gap: 8,
  },

  containerCentral: {
    flex: 1,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },

  containerFundo: {
    flexDirection: "row",
    height: 80,
    gap: 8,
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  redBox: {
    flex: 2,

    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  greenBox: {
    flex: 1,

    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  blueBox: {
    flex: 1,

    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  purpleBox: {
    flex: 1,

    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  grayBox: {
    flex: 1,

    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
});
