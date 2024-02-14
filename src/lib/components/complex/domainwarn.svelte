<script lang="ts">
	import Mediaquery from '../atomic/mediaquery.svelte';
	export let closed: boolean;
	let matches = false;
	export let height;
	$: height = closed? "0" : matches? "2rem" : "4rem";
</script>

<Mediaquery query="(min-width:540px)" bind:matches>
	<header slot="match" class="py-1 z-[201] bg-pink-800 text-pink stroke-pink
		flx w-full sticky top-0 w-full h-[2rem]"
		style:display={closed? "none" : ""}>
		Warning: make sure you're using&nbsp;
		<a class="clickable" href="https://choccyswap.com">https://choccyswap.com</a>!

		<button class="absolute right-10 clickable" on:click={()=>{closed=true}}>
			<svg viewBox="0,0,10,10" class="w-2 h-2">
				<path style="stroke-width:2" d="M0,0l10,10M0,10l10,-10"/>
			</svg>
		</button>
	</header>
	
	<header slot="nomatch" class="py-1 z-[201] bg-pink-800 text-pink stroke-pink
		flx flex-col w-full sticky top-0 w-full h-[4rem]"
		style:display={closed? "none" : ""}>
		Warning: make sure you're using&nbsp
		<span>
			<a class="clickable" href="https://choccyswap.com">https://choccyswap.com</a>!
		</span>

		<button class="absolute right-10 clickable" on:click={()=>{closed=true}}>
			<svg viewBox="0,0,10,10" class="w-2 h-2">
				<path style="stroke-width:2" d="M0,0l10,10M0,10l10,-10"/>
			</svg>
		</button>
	</header>
</Mediaquery>

<style>
	.clickable:hover {
		color: white;
		stroke: white;
        text-shadow: 0px 0px 4px var(--pink);
        filter: drop-shadow(0px, 0px, 4px, var(--pink));
	}
</style>
