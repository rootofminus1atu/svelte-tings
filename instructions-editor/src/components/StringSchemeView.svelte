<script lang="ts">
    import type { StringScheme } from "./interfaces";

    const { scheme = $bindable() }: { scheme: StringScheme } = $props()

    function selectString() {
        // shows popup and the user selects something
        scheme.path = 'div > p'
    }

    let content = $derived(`${scheme.path} CONTENT`)

    $effect(() => {
        const h = content
        console.log('we triggered', h)
    })

</script>

{#if !scheme.path}
    <button onclick={selectString}>select string</button>   
{:else}
    {content}
{/if}