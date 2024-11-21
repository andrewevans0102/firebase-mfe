import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { User } from 'firebase/auth'

const mockUser: User = {
    email: 'test@example.com',
    uid: 'test-uid',
    emailVerified: true,
    isAnonymous: false,
    metadata: {},
    providerData: [],
    refreshToken: '',
    tenantId: null,
    delete: async () => {},
    getIdToken: async () => '',
    getIdTokenResult: async () => ({
        token: '',
        authTime: '',
        issuedAtTime: '',
        expirationTime: '',
        signInProvider: null,
        claims: {},
        signInSecondFactor: null,
    }),
    reload: async () => {},
    toJSON: () => ({}),
    displayName: 'test user',
    phoneNumber: '123-123-1234',
    photoURL: '',
    providerId: '',
}

const root = document.getElementById('root')
if (root) {
    createRoot(root).render(<App user={mockUser} />)
}
