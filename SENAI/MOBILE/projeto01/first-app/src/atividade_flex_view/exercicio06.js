import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView06() {
  return (
    <View style={styles.container}>
        <View style={styles.headerBox}>
            <Text style={styles.textStyle}>Header</Text>
        </View>

        <View style={styles.mainBox}>
            <Text style={styles.textStyle}>Main Content</Text>
        </View>

        <View style={styles.footerBox}>
            <Text style={styles.textStyle}>Footer</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  headerBox: {
    height: 60,

    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  mainBox: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
  footerBox: {
    height: 50,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});