<script lang="ts">
    let { onSelect } = $props()

    function handleChange(event: Event) {
        const select = event.target as HTMLSelectElement;
        onSelect(select.value);
    }
</script>

<select onchange={handleChange}>
    <option value="object">object</option>
    <option value="list">list</option>
    <option value="string">string</option>
</select>