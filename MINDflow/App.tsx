import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ServiceCard {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  backgroundColor: string;
}

const services: ServiceCard[] = [
  {
    id: '1',
    title: 'Carriera',
    subtitle: 'Mindset',
    icon: '🧠',
    backgroundColor: '#2E3A59',
  },
  {
    id: '2',
    title: 'Emozioni',
    subtitle: 'Equilibrio',
    icon: '💖',
    backgroundColor: '#4A2E5C',
  },
  {
    id: '3',
    title: 'Fitness',
    subtitle: 'Alimentazione',
    icon: '💪',
    backgroundColor: '#5C4A2E',
  },
  {
    id: '4',
    title: 'Spiritualità',
    subtitle: 'Crescita',
    icon: '🔮',
    backgroundColor: '#2E5C4A',
  },
  {
    id: '5',
    title: 'Community',
    subtitle: 'Connessioni',
    icon: '🤗',
    backgroundColor: '#4A5C2E',
  },
  {
    id: '6',
    title: 'Profilo',
    subtitle: 'Personale',
    icon: '🆔',
    backgroundColor: '#5C2E4A',
  },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a1a" />
      
      {/* Status Bar */}
      <View style={styles.statusBar}>
        <View style={styles.statusLeft}>
          <Text style={styles.statusTime}>00:17</Text>
          <Ionicons name="moon" size={16} color="#fff" />
        </View>
        <View style={styles.statusRight}>
          <Ionicons name="cellular" size={16} color="#fff" />
          <Ionicons name="wifi" size={16} color="#fff" />
          <View style={styles.battery}>
            <Text style={styles.batteryText}>9</Text>
          </View>
        </View>
      </View>

      {/* Header Bar */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton}>
          <Ionicons name="close" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>MINDflow - App Aggiornata</Text>
        <TouchableOpacity style={styles.headerButton}>
          <Ionicons name="ellipsis-vertical" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Draggable Line */}
      <View style={styles.draggableLine} />

      {/* Main Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* App Branding */}
        <View style={styles.branding}>
          <View style={styles.brandingRow}>
            <Text style={styles.starIcon}>⭐</Text>
            <Text style={styles.brandingText}>MINDflow</Text>
          </View>
          <Text style={styles.mainTitle}>MINDflow</Text>
          <Text style={styles.tagline}>Il tuo viaggio verso la consapevolezza</Text>
        </View>

        {/* Services Grid */}
        <View style={styles.servicesGrid}>
          {services.map((service) => (
            <TouchableOpacity
              key={service.id}
              style={[styles.serviceCard, { backgroundColor: service.backgroundColor }]}
            >
              <Text style={styles.serviceIcon}>{service.icon}</Text>
              <Text style={styles.serviceTitle}>{service.title}</Text>
              <Text style={styles.serviceSubtitle}>{service.subtitle}</Text>
              
              {/* Special overlay for Profile card */}
              {service.id === '6' && (
                <View style={styles.profileOverlay}>
                  <Text style={styles.waveIcon}>👋</Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <View style={styles.bottomLeft}>
          <Text style={styles.versionText}>Versione 1</Text>
          <Ionicons name="swap-horizontal" size={16} color="#fff" />
        </View>
        
        <TouchableOpacity style={styles.homeButton}>
          <Text style={styles.homeIcon}>🏠</Text>
        </TouchableOpacity>
        
        <View style={styles.bottomRight}>
          <TouchableOpacity style={styles.systemButton}>
            <Text style={styles.systemText}>Sistema</Text>
            <Ionicons name="settings" size={16} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.uploadButton}>
            <Ionicons name="arrow-up-circle" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#1a1a1a',
  },
  statusLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statusRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  statusTime: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  battery: {
    width: 24,
    height: 12,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  batteryText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '600',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#2a2a2a',
  },
  headerButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    flex: 1,
  },
  draggableLine: {
    height: 2,
    backgroundColor: '#666',
    marginHorizontal: 20,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  branding: {
    marginTop: 30,
    marginBottom: 40,
  },
  brandingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  starIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  brandingText: {
    color: '#FFD700',
    fontSize: 16,
    fontWeight: '600',
  },
  mainTitle: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  tagline: {
    color: '#fff',
    fontSize: 16,
    fontStyle: 'italic',
    opacity: 0.8,
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  serviceCard: {
    width: '48%',
    aspectRatio: 1,
    borderRadius: 16,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  serviceIcon: {
    fontSize: 32,
    marginBottom: 12,
  },
  serviceTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4,
  },
  serviceSubtitle: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    opacity: 0.9,
  },
  profileOverlay: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFB6C1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  waveIcon: {
    fontSize: 20,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#2a2a2a',
    borderTopWidth: 1,
    borderTopColor: '#444',
  },
  bottomLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  versionText: {
    color: '#fff',
    fontSize: 14,
  },
  homeButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFB6C1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeIcon: {
    fontSize: 24,
  },
  bottomRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  systemButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#444',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  systemText: {
    color: '#fff',
    fontSize: 14,
  },
  uploadButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
