# Esempi di Estensioni per MINDflow

## 1. Aggiunta di Notifiche Push

### Installazione Dipendenze
```bash
npm install expo-notifications expo-device
```

### Implementazione
```typescript
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';

// Configurazione notifiche
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

// Richiesta permessi
async function registerForPushNotificationsAsync() {
  let token;
  
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    
    if (finalStatus !== 'granted') {
      alert('Permessi notifiche non concessi!');
      return;
    }
    
    token = (await Notifications.getExpoPushTokenAsync()).data;
  }
  
  return token;
}

// Invio notifica
async function sendNotification(title: string, body: string) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title,
      body,
    },
    trigger: { seconds: 2 },
  });
}
```

## 2. Implementazione di un Database Locale

### Installazione Dipendenze
```bash
npm install @react-native-async-storage/async-storage
```

### Implementazione
```typescript
import AsyncStorage from '@react-native-async-storage/async-storage';

// Interfaccia per i dati utente
interface UserData {
  id: string;
  name: string;
  preferences: {
    theme: 'light' | 'dark';
    notifications: boolean;
  };
  progress: {
    [category: string]: number;
  };
}

// Salvataggio dati
const saveUserData = async (data: UserData) => {
  try {
    await AsyncStorage.setItem('userData', JSON.stringify(data));
  } catch (error) {
    console.error('Errore salvataggio:', error);
  }
};

// Caricamento dati
const loadUserData = async (): Promise<UserData | null> => {
  try {
    const data = await AsyncStorage.getItem('userData');
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Errore caricamento:', error);
    return null;
  }
};

// Aggiornamento progressi
const updateProgress = async (category: string, value: number) => {
  try {
    const userData = await loadUserData();
    if (userData) {
      userData.progress[category] = value;
      await saveUserData(userData);
    }
  } catch (error) {
    console.error('Errore aggiornamento progressi:', error);
  }
};
```

## 3. Aggiunta di Animazioni

### Installazione Dipendenze
```bash
npm install react-native-reanimated
```

### Implementazione
```typescript
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

// Componente card animata
const AnimatedServiceCard = ({ service, onPress }) => {
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.95);
    opacity.value = withTiming(0.8);
  };

  const handlePressOut = () => {
    scale.value = withSpring(1);
    opacity.value = withTiming(1);
  };

  return (
    <Animated.View style={[styles.serviceCard, animatedStyle]}>
      <TouchableOpacity
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={styles.cardContent}
      >
        <Text style={styles.serviceIcon}>{service.icon}</Text>
        <Text style={styles.serviceTitle}>{service.title}</Text>
        <Text style={styles.serviceSubtitle}>{service.subtitle}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};
```

## 4. Implementazione di Temi Dinamici

### Struttura Temi
```typescript
interface Theme {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
  };
}

const themes: Theme[] = [
  {
    name: 'dark',
    colors: {
      primary: '#000000',
      secondary: '#2a2a2a',
      background: '#000000',
      surface: '#1a1a1a',
      text: '#ffffff',
      textSecondary: '#cccccc',
    },
  },
  {
    name: 'light',
    colors: {
      primary: '#ffffff',
      secondary: '#f5f5f5',
      background: '#ffffff',
      surface: '#e5e5e5',
      text: '#000000',
      textSecondary: '#666666',
    },
  },
  {
    name: 'nature',
    colors: {
      primary: '#2d5016',
      secondary: '#4a7c59',
      background: '#f0f7f0',
      surface: '#e8f5e8',
      text: '#1a3d0f',
      textSecondary: '#4a7c59',
    },
  },
];

// Hook per il tema
const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState(themes[0]);
  
  const toggleTheme = () => {
    const currentIndex = themes.findIndex(t => t.name === currentTheme.name);
    const nextIndex = (currentIndex + 1) % themes.length;
    setCurrentTheme(themes[nextIndex]);
  };
  
  return { theme: currentTheme, toggleTheme };
};
```

## 5. Aggiunta di Statistiche e Progressi

### Componente Statistiche
```typescript
interface ProgressData {
  category: string;
  current: number;
  target: number;
  unit: string;
}

const ProgressChart = ({ data }: { data: ProgressData[] }) => {
  return (
    <View style={styles.progressContainer}>
      <Text style={styles.progressTitle}>I Tuoi Progressi</Text>
      {data.map((item, index) => (
        <View key={index} style={styles.progressItem}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressCategory}>{item.category}</Text>
            <Text style={styles.progressValue}>
              {item.current}/{item.target} {item.unit}
            </Text>
          </View>
          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressFill,
                { width: `${(item.current / item.target) * 100}%` },
              ]}
            />
          </View>
        </View>
      ))}
    </View>
  );
};

// Stili per il grafico
const styles = StyleSheet.create({
  progressContainer: {
    padding: 20,
    backgroundColor: '#2a2a2a',
    borderRadius: 16,
    margin: 20,
  },
  progressTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  progressItem: {
    marginBottom: 16,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  progressCategory: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  progressValue: {
    fontSize: 14,
    color: '#ccc',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#444',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#FFB6C1',
    borderRadius: 4,
  },
});
```

## 6. Implementazione di Ricerca e Filtri

### Componente Ricerca
```typescript
const SearchBar = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    onSearch(text);
  };

  return (
    <View style={styles.searchContainer}>
      <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
      <TextInput
        style={styles.searchInput}
        placeholder="Cerca servizi..."
        placeholderTextColor="#666"
        value={searchQuery}
        onChangeText={handleSearch}
      />
      {searchQuery.length > 0 && (
        <TouchableOpacity
          onPress={() => handleSearch('')}
          style={styles.clearButton}
        >
          <Ionicons name="close-circle" size={20} color="#666" />
        </TouchableOpacity>
      )}
    </View>
  );
};

// Stili per la barra di ricerca
const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2a2a2a',
    borderRadius: 25,
    paddingHorizontal: 16,
    margin: 20,
    height: 50,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
  },
  clearButton: {
    marginLeft: 12,
  },
});
```

## 7. Aggiunta di Suoni e Feedback Audio

### Installazione Dipendenze
```bash
npm install expo-av
```

### Implementazione
```typescript
import { Audio } from 'expo-av';

// Caricamento suoni
const loadSounds = async () => {
  const buttonSound = new Audio.Sound();
  const successSound = new Audio.Sound();
  
  try {
    await buttonSound.loadAsync(require('./assets/sounds/button.mp3'));
    await successSound.loadAsync(require('./assets/sounds/success.mp3'));
    
    return { buttonSound, successSound };
  } catch (error) {
    console.error('Errore caricamento suoni:', error);
    return null;
  }
};

// Riproduzione suoni
const playButtonSound = async (sound: Audio.Sound) => {
  try {
    await sound.replayAsync();
  } catch (error) {
    console.error('Errore riproduzione suono:', error);
  }
};

// Hook per i suoni
const useSounds = () => {
  const [sounds, setSounds] = useState(null);
  
  useEffect(() => {
    loadSounds().then(setSounds);
    
    return () => {
      if (sounds) {
        sounds.buttonSound.unloadAsync();
        sounds.successSound.unloadAsync();
      }
    };
  }, []);
  
  return sounds;
};
```

## 8. Implementazione di Backup e Sincronizzazione

### Backup su Cloud
```typescript
import * as FileSystem from 'expo-file-system';

// Backup dati
const backupData = async (data: any) => {
  try {
    const backupPath = `${FileSystem.documentDirectory}backup_${Date.now()}.json`;
    await FileSystem.writeAsStringAsync(backupPath, JSON.stringify(data));
    
    // Qui puoi implementare l'upload su cloud storage
    // (Google Drive, iCloud, Dropbox, etc.)
    
    return backupPath;
  } catch (error) {
    console.error('Errore backup:', error);
    throw error;
  }
};

// Ripristino dati
const restoreData = async (backupPath: string) => {
  try {
    const backupContent = await FileSystem.readAsStringAsync(backupPath);
    const data = JSON.parse(backupContent);
    
    // Ripristina i dati nell'app
    await saveUserData(data);
    
    return data;
  } catch (error) {
    console.error('Errore ripristino:', error);
    throw error;
  }
};
```

---

Questi esempi mostrano come estendere MINDflow con funzionalità avanzate. Ricorda di:
1. Testare sempre le nuove funzionalità
2. Gestire gli errori appropriatamente
3. Mantenere le performance dell'app
4. Seguire le best practices di React Native