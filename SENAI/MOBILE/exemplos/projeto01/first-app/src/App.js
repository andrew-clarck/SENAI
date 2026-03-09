import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ViewExample from './basic_components/view_examples01';
import ViewExample02 from './basic_components/view_examples02';

export default function App() {
  return (
    <View style={styles.container}>
      <ViewExample02 />
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
