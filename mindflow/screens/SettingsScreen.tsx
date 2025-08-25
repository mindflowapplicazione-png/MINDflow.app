import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme';

export function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sistema</Text>
      <Text style={styles.subtitle}>Impostazioni dell'app e preferenze</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 20 },
  title: { color: '#f4d8cf', fontSize: 22, fontWeight: '800' },
  subtitle: { color: colors.textSecondary, marginTop: 8 },
});

