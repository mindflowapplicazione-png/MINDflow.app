import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';
import { theme } from '../theme';

type Props = {
  title: string;
  subtitle: string;
  emoji: string;
  tint: string;
  onPress?: () => void;
};

export default function Card({ title, subtitle, emoji, tint, onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.container, pressed && { opacity: 0.9 }, { backgroundColor: tint }] }>
      <View style={styles.emojiCircle}>
        <Text style={styles.emoji}>{emoji}</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing(2),
    borderRadius: theme.radius.lg,
    justifyContent: 'flex-end',
    minHeight: 160,
    ...theme.shadow.card,
  },
  emojiCircle: {
    position: 'absolute',
    top: theme.spacing(2),
    left: theme.spacing(2),
    backgroundColor: 'rgba(255,255,255,0.06)',
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: {
    fontSize: 22,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 6,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 14,
    fontWeight: '500',
  },
});

