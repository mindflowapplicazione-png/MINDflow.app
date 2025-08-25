import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../theme/colors';
import { theme } from '../theme';

export default function HeaderHero() {
  return (
    <LinearGradient
      colors={[ '#151517', '#0D0D0F' ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <View style={styles.badge}>
        <Text style={styles.badgeText}>✨ MINDflow</Text>
      </View>

      <Text style={styles.title}>MINDflow</Text>
      <Text style={styles.subtitle}>Il tuo viaggio verso la consapevolezza</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(4),
    paddingHorizontal: theme.spacing(2),
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  badge: {
    alignSelf: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderRadius: 999,
    marginBottom: theme.spacing(2),
  },
  badgeText: {
    color: colors.textSecondary,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  title: {
    textAlign: 'center',
    color: colors.textPrimary,
    fontSize: 36,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  subtitle: {
    textAlign: 'center',
    marginTop: 8,
    color: colors.textSecondary,
    fontSize: 15,
  },
});

