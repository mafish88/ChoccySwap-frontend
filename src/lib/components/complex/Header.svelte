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
		<header class="sticky z-[200] w-full flx" style:top={marginTop}>
			<div class="w-full text-pink max-w-[1500px] h-0">
				<Homelink {showWriting}/>
				{#if $page.url.pathname === "/exchange"}
					<CTA class="w-fit ml-auto m-4 absolute right-0 py-2" text={"Connect Wallet"} isA={false} action={()=>{}}/>
				{:else}
					<CTA class="w-fit ml-auto m-4 absolute right-0 py-2" text={"Swap now!"} href="exchange"/>
				{/if}
			</div>
		</header>
	</Mediaquery>
</Mediaquery>
