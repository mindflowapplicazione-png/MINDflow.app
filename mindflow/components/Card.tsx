import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

type Props = {
  title: string;
  subtitle: string;
  emoji: string;
  colors: [string, string];
  onPress: () => void;
};

export function Card({ title, subtitle, emoji, colors, onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={styles.wrap} accessibilityRole="button">
      <LinearGradient colors={colors} style={styles.card} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
        <Text style={styles.emoji}>{emoji}</Text>
        <View style={{ height: 8 }} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1 },
  card: {
    borderRadius: 20,
    padding: 20,
    minHeight: 170,
    justifyContent: 'center',
  },
  emoji: { fontSize: 40, textAlign: 'left' },
  title: { color: '#ffffff', fontSize: 20, fontWeight: '700', marginTop: 4 },
  subtitle: { color: '#d0ccd2', marginTop: 4, fontSize: 14 },
});

