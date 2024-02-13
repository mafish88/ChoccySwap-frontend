<script lang="ts">
	import CTA from '../atomic/cta.svelte';

    function buy() {
        navigator.clipboard.writeText("0xb723783e0f9015c8E20b87F6CF7ae24dF6479e62");
        window.open("https://traderjoexyz.com/avalanche/trade", '_blank');
    }
</script>    
    

<div class="flx space-x-20">
    <div class="flx flex-col">
        <h4 class="text-[20pt] pb-[0.5rem]">
            Try it
        </h4>
        <CTA text="Go to the app!" class="py-2" href="/exchange"/>
    </div>
    <div class="flx flex-col">
        <h4 class="text-[20pt] pb-[0.5rem]">
            Buy it
        </h4>
        <CTA text="Buy on TraderJoe!" isA={false} class="py-2"
            action={buy} tooltip="Copy the token address and go to TraderJoe"/>
    </div>
</div>

<style>
    h4 {
        text-shadow: 0px 0px 8px #ff3fdc;
    }
</style>