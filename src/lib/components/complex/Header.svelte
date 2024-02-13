<script lang="ts">
	import CTA from '../atomic/cta.svelte';
	import Homelink from './homelink.svelte';
	import { page } from '$app/stores';

</script>

<header class="absolute text-pink flx w-full">
	<div class="neon p-4 flex justify-between w-full max-w-[1500px]">
		<Homelink />
		{#if $page.url.pathname === "/exchange"}
			<CTA text={"Connect Wallet"} isA={false} action={()=>{}}/>
		{:else}
			<CTA text={"Swap now!"} href="exchange"/>
		{/if}
	</div>
</header>

<style>
	.neon:hover {
		color: white !important;
		stroke: white !important;
	}
</style>
