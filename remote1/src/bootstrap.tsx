import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

const root = document.getElementById('root')
if (root) {
    // Don't render anything in standalone mode for production
    if (process.env.NODE_ENV === 'development') {
        import('./devBootstrap')
    } else {
        createRoot(root).render(
            <div>
                This is a microfrontend that needs to be loaded from a host
                application.
            </div>
        )
    }
}
