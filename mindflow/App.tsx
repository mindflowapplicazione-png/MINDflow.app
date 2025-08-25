import React from 'react';
import { NavigationContainer, DefaultTheme, Theme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { View, Text, useColorScheme } from 'react-native';
import { HomeScreen } from './screens/HomeScreen';
import { CategoryScreen } from './screens/CategoryScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import { Ionicons } from '@expo/vector-icons';

export type RootStackParamList = {
  Root: undefined;
  Category: { id: string };
  Settings: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const DarkTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#0b0b0d',
    card: '#0b0b0d',
    text: '#f4e1da',
    border: '#1c1c20',
    primary: '#f4c7b5',
  },
};

function DockTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          height: 74,
          backgroundColor: '#141417',
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: '#f4c7b5',
        tabBarInactiveTintColor: '#b4b4b9',
        tabBarIcon: ({ color, size }) => {
          const name = route.name === 'Home' ? 'home' : route.name === 'Settings' ? 'settings' : 'ellipse';
          return <Ionicons name={name as any} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={DarkTheme}>
      <StatusBar style="light" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Root" component={DockTabs} />
        <Stack.Screen name="Category" component={CategoryScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

