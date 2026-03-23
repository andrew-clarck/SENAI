import { StyleSheet, Text, View } from "react-native";

export default function ExerSomativa02() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textStyle}>Header</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.sidebar}>
          <Text style={styles.textStyle}>Sidebar</Text>
        </View>

        <View style={styles.areaPrincipal}>
          <View style={styles.secaoSuperior}>
            <View style={styles.cardVerde}>
              <Text style={styles.textStyle}>Card A</Text>
            </View>

            <View style={styles.cardAzul}>
              <Text style={styles.textStyle}>Card B</Text>
            </View>
          </View>

          <View style={styles.divisor}></View>

          <View style={styles.secaoInferior}>
            <View style={styles.cardVermelho}>
              <Text style={styles.textStyle}>C</Text>
            </View>

            <View style={styles.cardLaranja}>
              <Text style={styles.textStyle}>Card D</Text>
            </View>

            <View style={styles.cardRoxo}>
              <Text style={styles.textStyle}>E</Text>
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
    padding: 8,
    gap: 8,
    backgroundColor: "#f5f5f5"
  },

  header: {
    height: 60,
    backgroundColor: "#2c3e50",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  body: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
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

  divisor: {
    height: 8,
    backgroundColor: "lightgrey",
    borderRadius: 8,
  },

  secaoInferior: {
    flex: 1,
    gap: 8,
    flexDirection: "row",
  },

  footer: {
    height: 50,
    backgroundColor: "#2c3e50",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  sidebar: {
    width: 80,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },

  cardVerde: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  cardAzul: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  cardVermelho: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  cardLaranja: {
    flex: 2,
    borderRadius: 8,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },
  cardRoxo: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center",
  },
});
