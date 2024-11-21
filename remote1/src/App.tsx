import React from 'react'
import { User } from 'firebase/auth'
import ErrorBoundary from './components/ErrorBoundary'

interface Props {
    user: User
}

const Remote1: React.FC<Props> = ({ user }) => {
    return (
        <ErrorBoundary>
            <div
                style={{
                    border: 'solid blue 20px',
                    padding: '20px',
                    maxWidth: '200px',
                    margin: '20px',
                }}
            >
                <h2>Remote 1</h2>
                <p>Authenticated as: {user.email}</p>
            </div>
        </ErrorBoundary>
    )
}

export default Remote1
