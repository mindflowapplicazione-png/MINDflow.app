import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from '../theme';

export default function FloatingWave() {
  return (
    <View style={styles.container}>
      <View style={styles.circle}><Text style={{ fontSize: 18 }}>👋</Text></View>
    </View>
  );
}

const SIZE = 68;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: theme.spacing(2),
    bottom: 90,
  },
  circle: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    backgroundColor: '#F6D3C7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

