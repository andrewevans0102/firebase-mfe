import React from 'react'
import { User } from 'firebase/auth'

interface Props {
    user: User
}

const Remote2: React.FC<Props> = ({ user }) => {
    return (
        <div
            style={{
                border: 'solid green 20px',
                padding: '20px',
                maxWidth: '200px',
                margin: '20px',
            }}
        >
            <h2>Remote 2</h2>
            <p>Authenticated as: {user.email}</p>
        </div>
    )
}

export default Remote2
