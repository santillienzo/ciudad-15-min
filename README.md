## Recordatorio
### .env
```
# Google Maps API Key
VITE_GOOGLE_MAPS_API_KEY=******

# Firebase API Keys
VITE_FIREBASE_API_KEY=******
VITE_FIREBASE_APP_ID=***
VITE_FIREBASE_AUTH_DOMAIN=******
VITE_FIREBASE_PROJECT_ID=******
VITE_FIREBASE_STORAGE_BUCKET=****
VITE_FIREBASE_MESSAGING_SENDER_ID=******
VITE_FIREBASE_MEASUREMENT_ID=G-******
```

### Subir a firebase hosting

TARGET_NAME = dev || prod
PROJECT_ID = project_id

Obtener *$FIREBASE_TOKEN* de firebase:
```	
firebase login:ci
```	

Construir la app
en *entorno* va 'dev' o 'prod' dependiendo cual app querramos deployar
```
npm run build:[entorno]	
```	

```
firebase deploy --only hosting:$TARGET_NAME --project $PROJECT_ID --token $FIREBASE_TOKEN
```