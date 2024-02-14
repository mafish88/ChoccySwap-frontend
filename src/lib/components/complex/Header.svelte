<script lang="ts">
	import CTA from '../atomic/cta.svelte';
	import Homelink from './homelink.svelte';
	import { page } from '$app/stores';
	import Mediaquery from '../atomic/mediaquery.svelte';

	export let marginTop: string;
</script>

<Mediaquery query="(min-width:660px)">
	<div slot="match" class="sticky w-full" style:top={marginTop}>
		<header class="absolute w-full text-pink flx">
			<div class="neon p-4 flex justify-between w-full max-w-[1500px]">
				<Homelink />
				{#if $page.url.pathname === "/exchange"}
					<CTA text={"Connect Wallet"} isA={false} action={()=>{}}/>
				{:else}
						<CTA text={"Swap now!"} href="exchange"/>
				{/if}
			</div>
		</header>
	</div>
</Mediaquery>

<style>
	.neon:hover {
		color: white !important;
		stroke: white !important;
	}
</style>
