import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../theme';
import { colors } from '../theme/colors';

type Props = {
  label?: string;
  emoji?: string;
  onPress?: () => void;
  size?: number;
};

export default function FAB({ label, emoji = '👋', onPress, size = 72 }: Props) {
  const radius = size / 2;
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.wrapper, pressed && { opacity: 0.9 }]}>
      <LinearGradient
        colors={[ '#F8DCD2', '#EAB9A8' ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.circle, { width: size, height: size, borderRadius: radius }]}
      >
        <Text style={styles.emoji}>{emoji}</Text>
      </LinearGradient>
      {label ? (
        <View style={styles.labelPill}>
          <Text style={styles.label}>{label}</Text>
        </View>
      ) : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    ...theme.shadow.card,
  },
  emoji: {
    fontSize: 24,
  },
  labelPill: {
    marginTop: 12,
    backgroundColor: colors.pillBg,
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  label: {
    color: colors.pillText,
    fontWeight: '700',
  },
});

