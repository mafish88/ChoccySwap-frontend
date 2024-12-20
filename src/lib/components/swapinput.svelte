<script>
	import eth from '$lib/images/eth.svg';
	import arrow from '$lib/images/arrow.svg';

	let { isInput, token = undefined } = $props();
</script>

<div
	class="allcenter swapinput h-[4cm] w-full {isInput ? 'rounded-t-3xl' : 'rounded-b-3xl'} my-1 px-6"
>
	<div class="flex flex-col items-start flex-[1_1_50%]">
		<span class="font-bold pl-3">
			{isInput ? 'You Pay' : 'You Receive'}
		</span>
		<button
			class="allcenter bg-[#101010] rounded-full mt-1 py-2 px-3 font-bold border border-gray-600"
		>
			{#if token !== undefined}
				<img src={eth} alt="token image" class="w-[32px] h-[32px] ml-1 mr-2" />
				ETH
			{:else}
				Choose Token
			{/if}
			<img src={arrow} alt="choose token" class="w-[30px] h-[30px]" />
		</button>
		<span class="text-sm opacity-50 mt-1 pl-3">Balance: 1.02</span>
	</div>
	<div class="flex flex-col items-end flex-[1_1_50%]">
		<input type="text" placeholder="0.00" />
		<span class="text-sm opacity-50">$1</span>
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
