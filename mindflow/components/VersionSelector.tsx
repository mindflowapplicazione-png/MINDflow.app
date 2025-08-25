import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  value: string;
  onToggle: () => void;
};

export function VersionSelector({ value, onToggle }: Props) {
  return (
    <Pressable onPress={onToggle} style={styles.container} accessibilityRole="button">
      <Text style={styles.label}>Versione {value}</Text>
      <Ionicons name="chevron-down" size={14} color="#d9c6bf" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6 as any,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    backgroundColor: '#1a1a1d',
    margin: 20,
  },
  label: { color: '#d9c6bf', fontWeight: '600' },
});

