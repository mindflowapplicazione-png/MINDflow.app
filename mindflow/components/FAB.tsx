import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  icon?: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
  size?: number;
};

export function FAB({ icon = 'hand-right', onPress, size = 64 }: Props) {
  return (
    <Pressable accessibilityRole="button" onPress={onPress} style={{ position: 'absolute', right: 24, bottom: 96 }}>
      <LinearGradient colors={["#ffd1c1", "#f4b7a1"]} start={{ x: 0.1, y: 0 }} end={{ x: 0.9, y: 1 }} style={[styles.container, { width: size, height: size, borderRadius: size / 2 }]}>
        <View style={styles.iconWrap}>
          <Ionicons name={icon as any} size={28} color="#7a3d2b" />
        </View>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

