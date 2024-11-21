declare module 'remote1/App' {
    import { User } from 'firebase/auth'
    const Remote1: React.FC<{ user: User }>
    export default Remote1
}

declare module 'remote2/App' {
    import { User } from 'firebase/auth'
    const Remote2: React.FC<{ user: User }>
    export default Remote2
}
