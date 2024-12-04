<script lang="ts">
    import Dropdown from "./Dropdown.svelte";
    import { emptyScheme, type ObjectScheme, type SchemeType } from "./interfaces";
    import KeyNameView from "./KeyNameView.svelte";
    import SchemeView from "./SchemeView.svelte";

    let { scheme = $bindable() }: { scheme: ObjectScheme } = $props()

    function addField() {
        scheme = {
            ...scheme,
            fields: [...scheme.fields, { key: "", value: undefined }]
        }
    }

    function onSelect(kind: SchemeType, index: number) {
        scheme = {
            ...scheme,
            fields: scheme.fields.map((field, i) => 
                i === index 
                    ? { ...field, value: emptyScheme(kind) }  
                    : field
            )
        }
    }

    function updateKeyName(index: number, newKeyName: string) {
        scheme = {
            ...scheme,
            fields: scheme.fields.map((field, i) =>
                i === index
                    ? { ...field, key: newKeyName }
                    : field
            )
        }
    }
</script>

{"{"}
    <div class="pl-1">
        {#each scheme.fields as kv, index}
            <KeyNameView keyName={kv.key} onSave={(newKeyName: string) => updateKeyName(index, newKeyName)} />:
            {#if kv.value}
                <SchemeView scheme={kv.value} />
            {:else}
                <Dropdown onSelect={(value: SchemeType) => onSelect(value, index)} />
                <br>
            {/if}
        {/each}
    </div>
    <div class="pl-1">
        <button onclick="{addField}">add field</button>
    </div>
{"}"}

<style>
    .pl-1 {
        padding-left: 1rem;
    }
</style>