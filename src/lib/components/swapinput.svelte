<script lang="ts">
	import arrow from '$lib/images/arrow.svg';

	let { isInput, openTokens, asset, amountToExchange, amountOwned } = $props();
</script>

<div
	class="allcenter swapinput h-[4cm] w-full {isInput ? 'rounded-t-3xl' : 'rounded-b-3xl'} my-1 px-6"
>
	<div class="flex flex-col items-start flex-[1_1_50%]">
		<span class="font-bold pl-3">
			{isInput ? 'You Pay' : 'You Receive'}
		</span>
		<button onclick={openTokens}
			class="allcenter bg-[#101010] rounded-full mt-1 py-2 px-3 font-bold border border-gray-600"
		>
			{#if asset !== undefined}
				<img src={asset.iconUrl} alt="token logo" class="max-w-[32px] max-h-[32px] ml-1 mr-2" />
				{asset.symbol}
			{:else}
				Choose Token
			{/if}
			<img src={arrow} alt="choose token" class="w-[30px] h-[30px]" />
		</button>
		<span class="text-sm opacity-50 mt-1 pl-3">Balance: {amountOwned}</span>
	</div>
	<div class="flex flex-col items-end flex-[1_1_50%]">
		<input type="text" placeholder="0.00" value={amountToExchange}/>
		<span class="text-sm opacity-50">${amountToExchange}</span>
	</div>
</div>

<style lang="less">
	.swapinput {
		background-color: #b5178e30;
		border: 2px solid #ed32bf30;
	}

	input[type='text'] {
		all: unset;
		background-color: transparent;
		border: none;
		color: white;
		font-size: xx-large;
		text-align: end;
		width: 100%;
		&::placeholder {
			color: white;
		}
		&:focus {
			outline: none;
		}
	}
</style>
