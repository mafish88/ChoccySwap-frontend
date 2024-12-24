<script lang="ts">
	import Settings from '$lib/components/settings.svelte';
	import Tokens from '$lib/components/tokens.svelte';
	import SwapBox from '$lib/sections/Swap/SwapBox.svelte';
	import type { TokenInfo } from '$lib/types';
	import { ASSET_TYPE_FT4, createAmount } from '@chromia/ft4';
	import { Buffer } from 'buffer';
	import { onMount } from 'svelte';

	let isTokensHidden = $state(true);
	let isSettingsHidden = $state(true);
	let token1: TokenInfo | undefined = $state(undefined);
	let token2: TokenInfo | undefined = $state(undefined);

	function switchTokens() {
		let t = token1;
		token1 = token2;
		token2 = t;
	}

	function close() {
		isTokensHidden = true;
	}
	function openTokens() {
		isTokensHidden = false;
	}

	function closeSettings() {
		isSettingsHidden = true;
	}
	function openSettings() {
		isSettingsHidden = false;
	}

	onMount(() => {
		token1 = {
			asset: {
				name: 'Ethereum',
				id: Buffer.alloc(32),
				symbol: 'ETH',
				decimals: 18,
				blockchainRid: Buffer.alloc(32),
				iconUrl:
					'https://ethereum.org/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Feth-diamond-glyph.3cd60daa.png&w=828&q=75',
				type: ASSET_TYPE_FT4,
				supply: 0n
			},
			amountOwned: createAmount(1.02, 18),
			amountToExchange: createAmount(1.015, 18)
		};
		token2 = {
			asset: {
				name: 'Chroma',
				id: Buffer.alloc(32),
				symbol: 'CHR',
				decimals: 6,
				blockchainRid: Buffer.alloc(32),
				iconUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3978.png',
				type: ASSET_TYPE_FT4,
				supply: 0n
			},
			amountOwned: createAmount(1216.792, 6),
			amountToExchange: createAmount(1000, 6)
		};
	});
</script>

<SwapBox {openTokens} {openSettings} {token1} {token2} {switchTokens} />
<Tokens {close} isHidden={isTokensHidden} />
<Settings close={closeSettings} isHidden={isSettingsHidden} />
