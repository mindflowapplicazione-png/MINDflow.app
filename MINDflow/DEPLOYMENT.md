# Guida al Deployment di MINDflow

## Preparazione per il Release

### 1. Aggiornamento Versioni
Prima del deployment, aggiorna le versioni nei file di configurazione:

```json
// app.json
{
  "expo": {
    "version": "1.0.0" // Incrementa per ogni release
  }
}
```

```json
// package.json
{
  "version": "1.0.0" // Deve corrispondere a app.json
}
```

### 2. Configurazione Build
Assicurati che `app.json` contenga tutte le configurazioni necessarie:

```json
{
  "expo": {
    "name": "MINDflow",
    "slug": "mindflow",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "dark",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#000000"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.tuodominio.mindflow",
      "buildNumber": "1",
      "infoPlist": {
        "NSCameraUsageDescription": "MINDflow richiede l'accesso alla fotocamera per alcune funzionalità.",
        "NSPhotoLibraryUsageDescription": "MINDflow richiede l'accesso alla galleria per salvare le tue esperienze."
      }
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#000000"
      },
      "package": "com.tuodominio.mindflow",
      "versionCode": 1,
      "permissions": [
        "CAMERA",
        "READ_EXTERNAL_STORAGE",
        "WRITE_EXTERNAL_STORAGE"
      ]
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "extra": {
      "eas": {
        "projectId": "your-project-id"
      }
    }
  }
}
```

## Build con EAS (Expo Application Services)

### 1. Installazione EAS CLI
```bash
npm install -g @expo/eas-cli
```

### 2. Login e Configurazione
```bash
eas login
eas build:configure
```

### 3. Configurazione eas.json
Crea un file `eas.json` nella root del progetto:

```json
{
  "cli": {
    "version": ">= 5.9.1"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal",
      "ios": {
        "simulator": true
      }
    },
    "production": {
      "ios": {
        "resourceClass": "m-medium"
      }
    }
  },
  "submit": {
    "production": {
      "ios": {
        "appleId": "your-apple-id@email.com",
        "ascAppId": "your-app-store-connect-app-id",
        "appleTeamId": "your-apple-team-id"
      },
      "android": {
        "serviceAccountKeyPath": "./path-to-service-account.json",
        "track": "production"
      }
    }
  }
}
```

### 4. Build per Android
```bash
# Build di sviluppo
eas build --platform android --profile development

# Build di preview
eas build --platform android --profile preview

# Build di produzione
eas build --platform android --profile production
```

### 5. Build per iOS
```bash
# Build di sviluppo
eas build --platform ios --profile development

# Build di preview
eas build --platform ios --profile preview

# Build di produzione
eas build --platform ios --profile production
```

## Build Manuale (Alternative)

### 1. Build con Expo CLI
```bash
# Per Android
expo build:android

# Per iOS
expo build:ios
```

### 2. Build Locale
```bash
# Per Android
npx react-native run-android --variant=release

# Per iOS
npx react-native run-ios --configuration Release
```

## Test del Build

### 1. Test su Dispositivi Fisici
- Testa su diversi dispositivi Android (diverse versioni OS)
- Testa su diversi dispositivi iOS (diverse versioni iOS)
- Verifica la compatibilità con diverse dimensioni di schermo

### 2. Test delle Funzionalità
- Verifica che tutte le categorie funzionino correttamente
- Testa la navigazione e i touch feedback
- Verifica le performance e la fluidità dell'app

### 3. Test di Crashes
- Utilizza strumenti come Crashlytics per monitorare i crash
- Testa scenari di stress (memoria bassa, connessione instabile)

## Submission agli Store

### 1. App Store (iOS)

#### Preparazione
- Crea un account Apple Developer ($99/anno)
- Configura App Store Connect
- Prepara le schermate dell'app
- Scrivi la descrizione e le keywords

#### Submission
```bash
eas submit --platform ios --profile production
```

#### Requisiti
- Screenshot per diverse dimensioni di iPhone
- Descrizione dell'app in italiano e inglese
- Privacy policy
- App review (può richiedere 1-7 giorni)

### 2. Google Play Store (Android)

#### Preparazione
- Crea un account Google Play Console ($25 una tantum)
- Prepara le schermate dell'app
- Scrivi la descrizione e le keywords

#### Submission
```bash
eas submit --platform android --profile production
```

#### Requisiti
- Screenshot per diverse dimensioni di dispositivo
- Descrizione dell'app in italiano e inglese
- Privacy policy
- App review (può richiedere 1-3 giorni)

## Monitoraggio Post-Release

### 1. Analytics
Implementa analytics per monitorare:
- Numero di download
- Utilizzo delle funzionalità
- Retention rate
- Crash reports

### 2. Feedback Utenti
- Monitora le recensioni sugli store
- Raccogli feedback attraverso l'app
- Rispondi ai commenti negativi

### 3. Aggiornamenti
- Pianifica aggiornamenti regolari
- Risolvi bug segnalati
- Aggiungi nuove funzionalità

## Configurazione CI/CD

### 1. GitHub Actions
Crea `.github/workflows/build.yml`:

```yaml
name: Build and Deploy

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run type-check
      - run: npm run lint
      - run: eas build --platform all --non-interactive
```

### 2. Automazione Release
```yaml
name: Release

on:
  push:
    tags:
      - 'v*'

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: eas submit --platform all --non-interactive
```

## Troubleshooting Comune

### 1. Errori di Build
- Verifica le dipendenze nel `package.json`
- Controlla la configurazione di `app.json`
- Verifica la compatibilità delle versioni

### 2. Errori di Submission
- Verifica che tutti i metadati siano completi
- Controlla che l'app rispetti le linee guida degli store
- Verifica la privacy policy e i permessi

### 3. Performance Issues
- Ottimizza le immagini e gli asset
- Implementa lazy loading dove possibile
- Monitora l'uso della memoria

## Checklist Pre-Deployment

- [ ] Versioni aggiornate in `app.json` e `package.json`
- [ ] Tutti i test passano
- [ ] App testata su dispositivi fisici
- [ ] Screenshot e metadati preparati
- [ ] Privacy policy aggiornata
- [ ] Configurazione EAS completata
- [ ] Account store configurati
- [ ] CI/CD pipeline configurata

---

**Nota**: Il deployment è un processo complesso. Assicurati di testare ogni passaggio e di avere un piano di rollback in caso di problemi.