import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const App = () => (
  <View style={styles.box}>
    <Text style={styles.text}>Hello, world!</Text>
    <Button title="press me" />
  </View>
);

const styles = StyleSheet.create({
  box: { backgroundColor: '#cccccc' },
  text: { fontWeight: 'bold' },
});

export default App;
