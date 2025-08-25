import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { colors } from '../theme/colors';
import { theme } from '../theme';

export default function CategoryScreen() {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const { id } = route.params || { id: 'unknown' };

  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={{ padding: theme.spacing(2) }}>
        <Text style={styles.title}>Categoria: {id}</Text>
        <Text style={styles.body}>
          Qui potrai integrare i contenuti e i servizi specifici per la categoria selezionata.
        </Text>
        <Pressable style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Indietro</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },
  title: {
    color: colors.textPrimary,
    fontWeight: '800',
    fontSize: 28,
    marginBottom: 8,
  },
  body: {
    color: colors.textSecondary,
    marginBottom: 16,
  },
  button: {
    backgroundColor: colors.pillBg,
    borderRadius: 999,
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  buttonText: {
    color: colors.pillText,
    fontWeight: '700',
  },
});

