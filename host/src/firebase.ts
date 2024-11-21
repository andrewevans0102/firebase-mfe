import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    // Add your Firebase config here
    apiKey: '<API_KEY>',
    authDomain: '<AUTH_DOMAIN>',
    projectId: '<PROJECT_ID>',
    storageBucket: '<STORAGE_BUCKET>',
    messagingSenderId: '<MESSAGING_SENDER_ID>',
    appId: '<APP_ID>',
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
