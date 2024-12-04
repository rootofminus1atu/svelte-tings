<script lang="ts">
    import type { ObjectScheme } from "./interfaces";
    import SchemeView from "./SchemeView.svelte";

    let { scheme = $bindable() }: { scheme: ObjectScheme } = $props()

    function addField() {
        scheme = {
            ...scheme,
            fields: [...scheme.fields, { key: "", value: undefined }]
        }
    }
</script>

{"{"}
    <div class="pl-1">
        {#each scheme.fields as kv}
            "{kv.key}": 
            {#if kv.value}
                <SchemeView scheme={kv.value} />
            {:else}
                <button>+</button><br>
            {/if}
        {/each}
    </div>
    <div class="pl-1">
        <button onclick="{addField}">add field</button>
    </div>
{"}"}<br>

<style>
    .pl-1 {
        padding-left: 1rem;
    }
</style>