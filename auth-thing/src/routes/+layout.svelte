<script lang="ts">
    import '$lib/aws-amplify'
    import { fetchAuthSession } from 'aws-amplify/auth';
    import { get } from 'aws-amplify/api';
    import { onMount } from "svelte";
    import { handleSignIn, handleSignOut, initializeAuth, auth } from '$lib/authStore.svelte';

    let { children } = $props()

    let username = $state('')
    let password = $state('')

    onMount(async () => {
        initializeAuth()
    })

    async function getProjects() {
        try {
            const { tokens } = await fetchAuthSession()

            const restOperation = get({
                apiName: 'scrapeApi',
                path: '/api/projects',
                options: {
                    headers: {
                        Authorization: `Bearer ${tokens?.idToken?.toString()}`
                    }
                }
            })

            const response = await restOperation.response
            const data = await response.body.json() as { projects: string[] }
            console.log('projects data:', data)
            return data.projects
        } catch (error) {
            console.error('error fetching projects:', error)
            throw error
        }
    }
</script>

<nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
</nav>

{#if auth.user}
    <p>Welcome, {auth.user?.signInDetails?.loginId ?? auth.user?.username}!</p>
    <button onclick={handleSignOut}>Sign Out</button>
{:else}
    <form onsubmit={() => handleSignIn(username, password)}>
        <input type="text" bind:value={username} placeholder="Username" />
        <input type="password" bind:value={password} placeholder="Password" />
        <button type="submit">Sign In</button>
    </form>
{/if}

{#if auth.user} 
    <h3>Your projects:</h3>
    {#await getProjects()}
        <p>loading projects...</p>
    {:then projects}
    <ul>
        {#each projects as project}
            <li>{project}</li>
        {/each}
    </ul>
    {:catch error}
        <p>error loading projects: {error.message}</p>
    {/await}
{:else}
    <p>sign in first</p>
{/if}


{@render children()}