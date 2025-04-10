<script lang="ts">
	import arrowhoriz from '$lib/images/common/arrowhoriz.svg';
	import ext from '$lib/images/common/externallink.svg';
	import type { Pair } from '$lib/types';
	import { getReadablePriceInCcy, makeNumberReadable } from '$lib/number-utils';
	import { createAmountFromBalance } from '@chromia/ft4';
	import Tokenimg from '../swap/tokenimg.svelte';
	import { shortenId } from '$lib/utils';
	import { goto } from '$app/navigation';
	import ReadablePrice from '../common/readablePrice.svelte';

	let { pair }: { pair: Pair } = $props();

	function onclick() {
		goto('/pools/' + pair.id.toString('hex'));
	}
	function explore(e: MouseEvent) {
		e.stopPropagation();
		window
			.open(
				'https://explorer.chromia.com/testnet/' +
					'FA289E086E3D6C3277336E270BADDF75035C1F049F242AB2CF61773D2822213D' +
					'/asset/' +
					pair.asset1.id.toString('hex'),
				'_blank'
			)
			?.focus();
	}
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	{onclick}
	class="flex clickable poolentry mb-2 rounded-3xl items-center p-5 text-white text-xl w-full"
>
	<div class="identifier flex items-center overflow-hidden text-ellipsis flex-[1_1_0.25rem]">
		<Tokenimg class="mr-4 w-[45px] h-[45px]" src={pair.asset1.iconUrl} alt="logo" />
		<div class="name flex">
			<div class="mr-1 shrink">{pair.asset1.name}</div>
			<div class="opacity-80 shrink">({pair.asset1.symbol})</div>
		</div>
	</div>
	<div class="money flex min-[801px]:basis-1 min-[801px]:grow items-center">
		<button onclick={explore} class="max-[800px]:hidden flex grow basis-1 justify-center text-lg opacity-70">
			<span> {shortenId(pair.asset1.id)} </span>
			<img src={ext} class="ml-1 w-[18px]" alt="open in explorer" />
		</button>
		<div class="max-[630px]:hidden max-[800px]:mr-8 grow basis-1">
			{makeNumberReadable(
				createAmountFromBalance(pair.amountCcy * 2n, pair.ccy.decimals).toString()
			)}
		</div>
		<div class="grow basis-1">
			<ReadablePrice fontSize={1.25} {...getReadablePriceInCcy(pair)} />
			<span>CCY</span>
		</div>
	</div>
	<div class="w-[40px] h-[40px]">
		<img src={arrowhoriz} alt="logo" />
	</div>
</div>

<style lang="less">
	.poolentry {
		backdrop-filter: blur(500px);
		border: solid #1a1a1a 2px;
		position: relative;
		text-align: center;
		transition: none;
		&:hover {
			background-image: linear-gradient(to right, #ff02d188 0, #8eeafc88 100%);
			border-color: #fff8;
		}
	}
	.name {
		flex: 1 1 auto;
		justify-content: start;
		& > div {
			overflow: hidden;
			text-overflow: ellipsis;
			text-align: left;
		}
	}
</style>
