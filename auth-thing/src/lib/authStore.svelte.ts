import { signIn, signOut, getCurrentUser, type AuthUser } from 'aws-amplify/auth';

export let user = $state<AuthUser | null>(null)

export async function initializeAuth() {
    try {
        const currentUser = await getCurrentUser()
        user = currentUser
    } catch {
        user = null
    }
}

export async function handleSignIn(username: string, password: string) {
    try {
        await signIn({
            username,
            password,
            options: {
                authFlowType: "USER_SRP_AUTH"
            }
        })
        user = await getCurrentUser()
        console.log('logged in')
    } catch (error) {
        console.error('error signing in:', error)
        throw error
    }
}

export async function handleSignOut() {
    try {
        await signOut()
        user = null
    } catch (error) {
        console.error('error signing out:', error)
        throw error
    }
}