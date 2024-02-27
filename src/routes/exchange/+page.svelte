<script>
	import Tokeninput from "$lib/components/atomic/tokeninput.svelte";
    import swtch from "$lib/images/switch.svg";

</script>
<div class="h-screen p-8 flx flex-col">
    <div class="swap flx flex-col">
        <Tokeninput />
        <button class="m-2">
            <img src={swtch} alt="switch" class="w-8 h-8"/>
        </button>
        <Tokeninput />
    </div>
</div>

<style>
    .swap {
        background-color: var(--gray);
        padding: 2rem;
        border-radius: 2rem;
    }
</style>