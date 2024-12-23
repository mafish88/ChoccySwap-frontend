<script lang="ts">
	import Swapinput from '$lib/components/swapinput.svelte';
import cog from '$lib/images/cog.svg';
	import switcharrow from '$lib/images/switch.svg';

	let { openTokens, openSettings, token1, token2, switchTokens } = $props();
</script>

<div
	id="mainbox"
	class="allcenter flex-col min-w-[600px]:w-[600px] mx-2 border border-gray-600 rounded-3xl my-[3cm] py-5 text-white"
>
	<div class="allcenter !justify-between w-full px-6">
		<h1 class="text-3xl font-extrabold">Swap</h1>
		<button onclick={openSettings} class="w-[30px]"> <img src={cog} alt="slippage menu" /></button>
	</div>

	<div class="allcenter relative flex-col w-full px-4 mt-4">
		<Swapinput {openTokens} isInput={true} {...token1}/>
		
        
        <div
			id="switch-background"
			class="absolute allcenter bg-[#303030] w-[2cm] h-[2cm] rounded-full border-[#682c5a] border-2"
		>
			<button onclick={switchTokens} class="bg-[#101010] w-[1.5cm] h-[1.5cm] rounded-full">
				<img src={switcharrow} alt="switch" />
			</button>
		</div>
		
		
        <Swapinput {openTokens} isInput={false} {...token2}/>
	</div>

	<div class="allcenter w-full px-4 mt-3">
		<button id="swapbutton" class="p-3 rounded-full w-full text-xl font-extrabold"> Swap </button>
	</div>
</div>

<style>
	#mainbox {
		background-image: radial-gradient(#303030 0, #303030 2cm, #101010);
	}

	#swapbutton {
		background: linear-gradient(90.5deg, #ff02d1 -4.36%, #8eeafc 104.32%);
	}
	#switch-background {
		--top: calc(50% - 0.25rem);
		--bottom: calc(50% + 0.25rem);
		--right: calc(100% - 3px);
		clip-path: polygon(
			0 var(--top),
			2px var(--top),
			2px var(--bottom),
			0 var(--bottom),
			0% 100%,
			100% 100%,
			100% var(--bottom),
			var(--right) var(--bottom),
			var(--right) var(--top),
			100% var(--top),
			100% 0,
			0 0
		);
	}
</style>
