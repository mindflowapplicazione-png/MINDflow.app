import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Card } from '../components/Card';
import { FAB } from '../components/FAB';
import { VersionSelector } from '../components/VersionSelector';
import { colors, categoryMeta, categoryGradients } from '../theme';
import type { RootStackParamList } from '../App';
import { Ionicons } from '@expo/vector-icons';

export function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 160 }}>
        <VersionSelector value="1" onToggle={() => {}} />
        <LinearGradient colors={["#121215", "#0b0b0d"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.header}>
          <Text style={styles.appTitle}>MINDflow</Text>
          <Text style={styles.tagline}>Il tuo viaggio verso la consapevolezza</Text>
        </LinearGradient>

        <View style={styles.grid}>
          {categoryMeta.map((c) => (
            <View key={c.id} style={styles.gridItem}>
              <Card
                title={c.title}
                subtitle={c.subtitle}
                emoji={c.emoji}
                colors={categoryGradients[c.key]}
                onPress={() => navigation.navigate('Category', { id: c.id })}
              />
            </View>
          ))}
        </View>
      </ScrollView>

      <Pressable onPress={() => navigation.navigate('Settings')} style={styles.settingsBtn} accessibilityRole="button">
        <LinearGradient colors={["#f3c8b6", "#eeb39a"]} style={styles.settingsPill}>
          <Text style={styles.settingsText}>Sistema</Text>
          <Ionicons name="settings" size={16} color="#6e4539" />
        </LinearGradient>
      </Pressable>

      <FAB icon="hand-right" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },
  appTitle: { color: '#f4d8cf', fontSize: 32, fontWeight: '800' },
  tagline: { color: '#bdb8bf', marginTop: 8 },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 14 as any,
  },
  gridItem: { width: '48%' },
  settingsBtn: { position: 'absolute', right: 20, bottom: 20 },
  settingsPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8 as any,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 14,
  },
  settingsText: { color: '#6e4539', fontWeight: '700' },
});

