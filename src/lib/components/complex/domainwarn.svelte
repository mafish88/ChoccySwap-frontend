<script lang="ts">
	export let closed: boolean;
</script>

<header class="py-1 z-[202] bg-pink-800 text-pink stroke-pink flx w-full"
	style:display={closed? "none" : "relative"}>
	Warning: make sure you're using&nbsp;
	<a class="clickable" href="https://choccyswap.com">https://choccyswap.com</a>!

	<button class="absolute right-10 clickable" on:click={()=>{closed=true}}>
		<svg viewBox="0,0,10,10" class="w-2 h-2">
			<path style="stroke-width:2" d="M0,0l10,10M0,10l10,-10"/>
		</svg>
	</button>
</header>

<style>
	/* over 540 px */
	.clickable:hover {
		color: white;
		stroke: white;
        text-shadow: 0px 0px 4px var(--pink);
        filter: drop-shadow(0px, 0px, 4px, var(--pink));
	}
</style>
