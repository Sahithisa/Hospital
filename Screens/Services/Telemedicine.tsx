import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Telemedicine: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Telemedicine</Text>
    <Text style={styles.text}>
      Consult with doctors remotely via secure video or audio, get medical advice, e-prescriptions, and follow-ups from home.
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  text: { fontSize: 16, color: '#333' },
});

export default Telemedicine;
