import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from '../theme';
import { colors } from '../theme/colors';
import FAB from './FAB';

type Props = {
  onHomePress?: () => void;
  onSettingsPress?: () => void;
};

export default function BottomBar({ onHomePress, onSettingsPress }: Props) {
  return (
    <View style={styles.container}>
      <View style={{ width: 72 }} />
      <FAB emoji="🏠" onPress={onHomePress} size={72} />
      <View style={styles.settingsPill}>
        <Text style={styles.settingsText}>Sistema ⚙️</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(2) + 8,
    backgroundColor: colors.surface,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  settingsPill: {
    backgroundColor: '#2A2322',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 999,
  },
  settingsText: {
    color: '#E6C6BB',
    fontWeight: '700',
  },
});

