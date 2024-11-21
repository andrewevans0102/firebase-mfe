import React, { Suspense } from 'react'

// Error Boundary Component
class ErrorBoundary extends React.Component<
    { children: React.ReactNode },
    { hasError: boolean; error: Error | null }
> {
    constructor(props: { children: React.ReactNode }) {
        super(props)
        this.state = { hasError: false, error: null }
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true, error }
    }

    render() {
        if (this.state.hasError) {
            const styles = {
                container: {
                    padding: '1rem',
                    backgroundColor: '#fef2f2',
                    border: '1px solid #fecaca',
                    borderRadius: '8px',
                },
                heading: {
                    color: '#dc2626',
                    fontWeight: 600,
                    marginBottom: '0.5rem',
                },
                message: {
                    color: '#ef4444',
                },
                button: {
                    marginTop: '0.75rem',
                    padding: '0.5rem 1rem',
                    backgroundColor: '#fee2e2',
                    color: '#dc2626',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                },
            }

            return (
                <div style={styles.container}>
                    <h2 style={styles.heading}>Failed to Load Component</h2>
                    <p style={styles.message}>{this.state.error?.message}</p>
                    <button
                        style={styles.button}
                        onClick={() => window.location.reload()}
                    >
                        Retry
                    </button>
                </div>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary
