import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Exemplo01 from './jsx_examples/exemplo-01-estrutura';
import Exemplo02 from './jsx_examples/exemplo-02-expressoes';
import Exemplo03 from './jsx_examples/exemplo-03-condicionais';
import Exemplo04 from './jsx_examples/exemplo-04-listas';
import Lista01 from './jsx_exercises/lista01_andrewclarck';
import Lista02 from './jsx_exercises/lista02_andrewclarck';
import Lista03 from './jsx_exercises/lista03_andrewclarck';

export default function App() {
  return (
    <View style={styles.container}>
      <Lista02 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
