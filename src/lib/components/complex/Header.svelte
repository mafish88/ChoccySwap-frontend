<script lang="ts">
	import CTA from '../atomic/cta.svelte';
	import Homelink from './homelink.svelte';
	import { page } from '$app/stores';
	import Mediaquery from '../atomic/mediaquery.svelte';

	export let marginTop: string;
	let showWriting = false;
</script>

<Mediaquery query="(min-width:660px)">
	<Mediaquery slot="match" query="(min-width:790px)" bind:matches={showWriting}>
		<div class="sticky z-[200] w-full" style:top={marginTop}>
			<header class="absolute w-full text-pink flx">
				<div class="neon p-4 flex justify-between w-full max-w-[1500px]">
					<Homelink {showWriting}/>
					{#if $page.url.pathname === "/exchange"}
						<CTA text={"Connect Wallet"} isA={false} action={()=>{}}/>
					{:else}
						<CTA text={"Swap now!"} href="exchange"/>
					{/if}
				</div>
			</header>
		</div>
	</Mediaquery>
</Mediaquery>

<style>
	.neon:hover {
		color: white !important;
		stroke: white !important;
	}
</style>
