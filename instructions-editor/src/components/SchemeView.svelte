<script lang="ts">
    import { SchemeType, type Scheme } from "./interfaces";
    import ObjectSchemeView from "./ObjectSchemeView.svelte";
    import StringSchemeView from "./StringSchemeView.svelte";

    let { scheme = $bindable() }: { scheme: Scheme } = $props()
</script>

{#if scheme.type === SchemeType.String}
    <StringSchemeView scheme={scheme} />
{:else if scheme.type === SchemeType.Object}
    <ObjectSchemeView bind:scheme={scheme} />
{:else}
    NOT IMPLEMENTED YET
{/if}
<br>