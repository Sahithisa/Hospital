import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Diagnostics: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Diagnostics</Text>
    <Text style={styles.text}>
      Lab tests and diagnostic services at your doorstep, including sample collection and quick reporting of test results.
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  text: { fontSize: 16, color: '#333' },
});

export default Diagnostics;
