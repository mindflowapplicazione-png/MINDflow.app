import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import HeaderHero from '../components/HeaderHero';
import Card from '../components/Card';
import { theme } from '../theme';
import { colors } from '../theme/colors';
import BottomBar from '../components/BottomBar';
import VersionSelector from '../components/VersionSelector';
import FloatingWave from '../components/FloatingWave';
import { useNavigation } from '@react-navigation/native';

const cards = [
  { id: 'career', title: 'Carriera', subtitle: 'Mindset', emoji: '🧠', tint: '#12192B' },
  { id: 'emotions', title: 'Emozioni', subtitle: 'Equilibrio', emoji: '💖', tint: '#2A1A2A' },
  { id: 'fitness', title: 'Fitness', subtitle: 'Alimentazione', emoji: '💪🏼', tint: '#2A1F16' },
  { id: 'spirituality', title: 'Spiritualità', subtitle: 'Crescita', emoji: '🔮', tint: '#132219' },
  { id: 'community', title: 'Community', subtitle: '', emoji: '👥', tint: '#221F14' },
  { id: 'profile', title: 'Profilo', subtitle: '', emoji: '🌀', tint: '#221629' },
];

export default function HomeScreen() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={{ paddingBottom: theme.spacing(2) }}>
        <HeaderHero />

        <View style={styles.grid}>
          {cards.map((c) => (
            <View key={c.id} style={styles.gridItem}>
              <Card
                title={c.title}
                subtitle={c.subtitle}
                emoji={c.emoji}
                tint={c.tint}
                onPress={() => navigation.navigate('Category', { id: c.id })}
              />
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.bottomBarWrapper}>
        <BottomBar onHomePress={() => {}} onSettingsPress={() => navigation.navigate('Settings')} />
      </View>
      <VersionSelector version="1" />
      <FloatingWave />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: theme.spacing(2),
    paddingTop: theme.spacing(2),
    gap: theme.spacing(2) as any,
  },
  gridItem: {
    width: '48%'
  },
  bottomBarWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});

