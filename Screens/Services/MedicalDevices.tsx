import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MedicalDevices: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Medical Devices</Text>
    <Text style={styles.text}>
      Home delivery and setup of medical equipment like beds, oxygen concentrators, wheelchairs, and more.
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  text: { fontSize: 16, color: '#333' },
});

export default MedicalDevices;
