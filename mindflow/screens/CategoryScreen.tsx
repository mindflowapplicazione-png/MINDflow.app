import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRoute, useNavigation } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';
import type { RootStackParamList } from '../App';
import { categoryMeta, colors } from '../theme';
import { Ionicons } from '@expo/vector-icons';

export function CategoryScreen() {
  const route = useRoute<RouteProp<RootStackParamList, 'Category'>>();
  const navigation = useNavigation();
  const category = categoryMeta.find((c) => c.id === route.params?.id);

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Pressable onPress={() => navigation.goBack()} accessibilityRole="button">
          <Ionicons name="chevron-back" size={24} color="#f4d8cf" />
        </Pressable>
        <Text style={styles.title}>{category?.title ?? 'Categoria'}</Text>
        <View style={{ width: 24 }} />
      </View>
      <LinearGradient colors={["#141417", "#0e0e10"]} style={{ flex: 1, borderRadius: 16, padding: 20 }}>
        <Text style={{ color: colors.textSecondary }}>
          Contenuti e servizi di {category?.title ?? route.params?.id}
        </Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 20 },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  title: { color: '#f4d8cf', fontSize: 20, fontWeight: '700' },
});

