import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';
import { theme } from '../theme';

export default function SettingsScreen() {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Sistema</Text>
      <Text style={styles.text}>Impostazioni generali e informazioni versione.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
    padding: theme.spacing(2),
  },
  title: {
    color: colors.textPrimary,
    fontWeight: '800',
    fontSize: 28,
    marginBottom: 8,
  },
  text: {
    color: colors.textSecondary,
  },
});

