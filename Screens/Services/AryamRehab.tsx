import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AryamRehab: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Aryam Rehabilitation</Text>
    <Text style={styles.text}>
      Comprehensive rehabilitation for all ages, post-surgery recovery, mobility improvement, and support after illness or injury.
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  text: { fontSize: 16, color: '#333' },
});

export default AryamRehab;
