import { StyleSheet, Text, View } from "react-native";

export default function AtividadeSomativa01() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.yellowBox}>
          <Text style={styles.textStyle}>Amarelo</Text>
        </View>

        <View style={styles.blueBox}>
          <Text style={styles.textStyle}>Azul Escuro</Text>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.greenBox}>
          <Text style={styles.textStyle}>Verde</Text>
        </View>

        <View style={styles.areaPrincipal}>
          <View style={styles.pinkBox}>
            <Text style={styles.textStyle}>Rosa</Text>
          </View>

          <View style={styles.orangeBox}>
            <Text style={styles.textStyle}>Laranja</Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.redBox}>
          <Text style={styles.textStyle}>Vermelho</Text>
        </View>

        <View style={styles.tealBox}>
          <Text style={styles.textStyle}>Teal</Text>
        </View>

        <View style={styles.purpleBox}>
          <Text style={styles.textStyle}>Roxo</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
    padding: 8,
  },

  header: {
    height: 100,
    gap: 8,
    flexDirection: "row",
  },

  body: {
    flex: 1,
    gap: 8,
    flexDirection: "row",
  },

  footer: {
    height: 90,
    gap: 8,
    flexDirection: "row",
  },

  areaPrincipal: {
    flex: 1,
    gap: 8,
    flexDirection: "column",
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
  },

  yellowBox: {
    flex: 1,

    borderRadius: 8,
    backgroundColor: "gold",
    alignItems: "center",
    justifyContent: "center",
  },

  blueBox: {
    flex: 3,

    borderRadius: 8,
    backgroundColor: "darkblue",
    alignItems: "center",
    justifyContent: "center",
  },

  greenBox: {
    flex: 1,

    borderRadius: 8,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },

  pinkBox: {
    flex: 1,

    borderRadius: 8,
    backgroundColor: "deeppink",
    alignItems: "center",
    justifyContent: "center",
  },

  orangeBox: {
    flex: 1,

    borderRadius: 8,
    backgroundColor: "darkorange",
    alignItems: "center",
    justifyContent: "center",
  },

  redBox: {
    flex: 1,

    borderRadius: 8,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },

  tealBox: {
    flex: 1,

    borderRadius: 8,
    backgroundColor: "teal",
    alignItems: "center",
    justifyContent: "center",
  },

  purpleBox: {
    flex: 1,

    borderRadius: 8,
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
  },
});
