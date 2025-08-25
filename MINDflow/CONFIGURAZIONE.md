# Configurazione e Personalizzazione di MINDflow

## Personalizzazione dei Servizi

### Modifica delle Categorie
Per modificare le categorie di servizi, edita l'array `services` nel file `App.tsx`:

```typescript
const services: ServiceCard[] = [
  {
    id: '1',
    title: 'Nuova Categoria',
    subtitle: 'Nuovo Sottotitolo',
    icon: '🌟',
    backgroundColor: '#HEXCODE',
  },
  // ... altre categorie
];
```

### Colori Disponibili
Ecco alcuni esempi di colori che puoi utilizzare:

- **Blu**: `#2E3A59`, `#1E3A8A`, `#1E40AF`
- **Viola**: `#4A2E5C`, `#5B21B6`, `#7C3AED`
- **Verde**: `#2E5C4A`, `#059669`, `#10B981`
- **Marrone**: `#5C4A2E`, `#92400E`, `#B45309`
- **Rosa**: `#5C2E4A`, `#BE185D`, `#EC4899`

### Icone Emoji
Puoi utilizzare qualsiasi emoji Unicode. Ecco alcuni esempi:

- 🧠 (cervello)
- 💖 (cuore)
- 💪 (bicipite)
- 🔮 (sfera di cristallo)
- 🤗 (abbraccio)
- 🆔 (identità)
- 🌟 (stella)
- 🏠 (casa)
- 👋 (saluto)

## Personalizzazione del Design

### Tema Colori
Modifica i colori principali nell'oggetto `styles`:

```typescript
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000', // Sfondo principale
  },
  header: {
    backgroundColor: '#2a2a2a', // Colore header
  },
  // ... altri stili
});
```

### Tipografia
Personalizza i font e le dimensioni del testo:

```typescript
serviceTitle: {
  color: '#fff',
  fontSize: 18, // Dimensione titolo
  fontWeight: 'bold',
  // fontFamily: 'System', // Font personalizzato
},
```

### Layout
Modifica le dimensioni e gli spazi:

```typescript
serviceCard: {
  width: '48%', // Larghezza card
  aspectRatio: 1, // Proporzioni
  borderRadius: 16, // Bordi arrotondati
  padding: 20, // Spaziatura interna
},
```

## Aggiunta di Nuove Funzionalità

### Nuove Categorie
Per aggiungere nuove categorie, segui questo pattern:

1. Aggiungi la nuova categoria all'array `services`
2. Definisci i colori e le icone
3. Aggiungi la logica di navigazione se necessario

### Navigazione
Per implementare la navigazione tra schermate:

```typescript
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Implementa la navigazione per ogni categoria
```

### Gestione dello Stato
Per aggiungere funzionalità interattive:

```typescript
const [selectedService, setSelectedService] = useState<string | null>(null);

const handleServicePress = (serviceId: string) => {
  setSelectedService(serviceId);
  // Logica per aprire la categoria
};
```

## Configurazione per il Deployment

### Build per Android
```bash
expo build:android
```

### Build per iOS
```bash
expo build:ios
```

### Build per Web
```bash
expo build:web
```

### Configurazione App Store
Aggiorna `app.json` con le informazioni corrette:

```json
{
  "expo": {
    "name": "MINDflow",
    "slug": "mindflow",
    "version": "1.0.0",
    "ios": {
      "bundleIdentifier": "com.tuodominio.mindflow"
    },
    "android": {
      "package": "com.tuodominio.mindflow"
    }
  }
}
```

## Ottimizzazioni

### Performance
- Utilizza `React.memo` per componenti che non cambiano spesso
- Implementa `useCallback` per funzioni passate come props
- Utilizza `useMemo` per calcoli costosi

### Accessibilità
- Aggiungi `accessibilityLabel` ai componenti interattivi
- Implementa la navigazione con tastiera
- Aggiungi supporto per screen reader

### Internazionalizzazione
Per supportare più lingue:

```typescript
const translations = {
  it: {
    title: 'MINDflow',
    tagline: 'Il tuo viaggio verso la consapevolezza',
  },
  en: {
    title: 'MINDflow',
    tagline: 'Your journey towards awareness',
  },
};
```

## Debug e Testing

### Console Log
```typescript
console.log('Debug info:', { service, user });
```

### React Native Debugger
Installa React Native Debugger per debugging avanzato.

### Testing
Implementa test con Jest e React Native Testing Library:

```typescript
import { render, fireEvent } from '@testing-library/react-native';

test('service card is pressable', () => {
  const { getByText } = render(<App />);
  const card = getByText('Carriera');
  fireEvent.press(card);
  // Verifica il comportamento
});
```

---

**Nota**: Ricorda di testare sempre le modifiche su dispositivi reali prima del deployment in produzione.