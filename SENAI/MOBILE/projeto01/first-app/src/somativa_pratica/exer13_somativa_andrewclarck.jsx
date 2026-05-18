import { StyleSheet, Text, View } from "react-native";

export default function AtividadeSomativa02() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textStyle}>Header</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.sidebar}>
          <Text style={styles.textStyle}>Side</Text>
        </View>

        <View style={styles.areaPrincipal}>
          <View style={styles.secaoSuperior}>
            <View style={styles.greenBox}>
              <Text style={styles.textStyle}>Verde</Text>
            </View>

            <View style={styles.blueBox}>
              <Text style={styles.textStyle}>Azul</Text>
            </View>
          </View>

          <View style={styles.divisor}></View>

          <View style={styles.secaoSuperior}>
            <View style={styles.redBox}>
              <Text style={styles.textStyle}>Vermelho</Text>
            </View>

            <View style={styles.orangeBox}>
              <Text style={styles.textStyle}>Laranja</Text>
            </View>

            <View style={styles.purpleBox}>
              <Text style={styles.textStyle}>Roxo</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.textStyle}>Footer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
    padding: 8,
    backgroundColor: "#1a1a1a",
  },

  header: {
    height: 60,
    borderRadius: 8,
    backgroundColor: "#2c3e50",
    justifyContent: "center",
    alignItems: "center",
  },

  body: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
  },

  footer: {
    height: 50,
    borderRadius: 8,
    backgroundColor: "#2c3e50",
    justifyContent: "center",
    alignItems: "center",
  },

  areaPrincipal: {
    flex: 1,
    flexDirection: "column",
    gap: 8,
  },

  secaoSuperior: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
  },

  secaoInferior: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
  },

  divisor: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "#34495e",
    flexDirection: "column",
    alignSelf: "center",
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
  },

  sidebar: {
    width: 80,
    borderRadius: 8,

    backgroundColor: "#95a5a6",
    alignItems: "center",
    justifyContent: "center",
  },

  greenBox: {
    flex: 1,
    borderRadius: 8,

    backgroundColor: "seagreen",
    alignItems: "center",
    justifyContent: "center",
  },

  blueBox: {
    flex: 1,
    borderRadius: 8,

    backgroundColor: "steelblue",
    alignItems: "center",
    justifyContent: "center",
  },

  redBox: {
    flex: 1,
    borderRadius: 8,

    backgroundColor: "firebrick",
    alignItems: "center",
    justifyContent: "center",
  },

  orangeBox: {
    flex: 2,
    borderRadius: 8,

    backgroundColor: "darkorange",
    alignItems: "center",
    justifyContent: "center",
  },

  purpleBox: {
    flex: 1,
    borderRadius: 8,

    backgroundColor: "darkorchid",
    alignItems: "center",
    justifyContent: "center",
  },
});
