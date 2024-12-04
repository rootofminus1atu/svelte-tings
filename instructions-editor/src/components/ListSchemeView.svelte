<script lang="ts">
    import type { ListScheme } from "./interfaces";

    const { scheme = $bindable() }: { scheme: ListScheme } = $props()

</script>

{"["}
<div class="pl-1">
    list contents
</div>
{"]"}

<style>
    .pl-1 {
        padding-left: 1rem;
    }
</style>