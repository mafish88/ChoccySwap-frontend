<script lang="ts">
    import { onMount } from "svelte";

    export let query: string;
    export let matches = false;

    let mql: MediaQueryList;
    let wasMounted = false;
    let listener = (ev: MediaQueryListEvent) => {matches = ev.matches}

    onMount(() => {
        wasMounted = true;
        return () => {
            removeActiveListener();
        };
    });

    $: {
        if (wasMounted) {
            removeActiveListener();
            addNewListener(query);
        }
    }

    function addNewListener(query: string) {
        mql = window.matchMedia(query);
        mql.addEventListener("change", listener);
        matches = mql.matches;
    }

    function removeActiveListener() {
        if (mql && listener) {
            mql.removeEventListener("change", listener);
        }
    }
</script>

{#if matches}
    <slot name="match" />
{:else}
    <slot name="nomatch" />
{/if}
<slot {matches} />
