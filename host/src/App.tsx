import React, { useState, useEffect } from 'react'
import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    User,
} from 'firebase/auth'
import { auth } from './firebase'
import ErrorBoundary from './components/ErrorBoundary'

const Remote1 = React.lazy(() => import('remote1/App'))
const Remote2 = React.lazy(() => import('remote2/App'))

interface AuthState {
    user: User | null
    loading: boolean
}

const App: React.FC = () => {
    const [authState, setAuthState] = useState<AuthState>({
        user: null,
        loading: true,
    })

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log('USER', user)
            setAuthState({ user, loading: false })
        })
        return () => unsubscribe()
    }, [])

    const handleLogin = async (email: string, password: string) => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
        } catch (error) {
            console.error('Login failed:', error)
        }
    }

    if (authState.loading) {
        return <div>Loading...</div>
    }

    return (
        <ErrorBoundary>
            <div>
                {!authState.user ? (
                    <LoginForm onLogin={handleLogin} />
                ) : (
                    <div>
                        <h1>Welcome {authState.user.email}</h1>
                        <React.Suspense fallback="Loading Remote 1...">
                            <Remote1 user={authState.user} />
                        </React.Suspense>
                        <React.Suspense fallback="Loading Remote 2...">
                            <Remote2 user={authState.user} />
                        </React.Suspense>
                        <button onClick={async () => await signOut(auth)}>
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </ErrorBoundary>
    )
}

interface LoginFormProps {
    onLogin: (email: string, password: string) => Promise<void>
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onLogin(email, password)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button type="submit">Login</button>
        </form>
    )
}

export default App
