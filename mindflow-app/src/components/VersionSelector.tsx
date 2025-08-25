import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme/colors';
import { theme } from '../theme';

type Props = {
  version?: string;
  onPress?: () => void;
};

export default function VersionSelector({ version = '1', onPress }: Props) {
  return (
    <Pressable style={({ pressed }) => [styles.pill, pressed && { opacity: 0.9 }]} onPress={onPress}>
      <Text style={styles.text}>Versione {version} ⌄</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pill: {
    position: 'absolute',
    left: theme.spacing(2),
    bottom: 10,
    backgroundColor: '#262223',
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  text: {
    color: '#E8D3CD',
    fontWeight: '700',
  },
});

