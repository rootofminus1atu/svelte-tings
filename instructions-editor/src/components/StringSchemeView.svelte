<script lang="ts">
    import type { StringScheme } from "./interfaces";

    const { scheme }: { scheme: StringScheme } = $props()
</script>

{scheme.path}<br>