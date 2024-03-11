<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	//import { createAmount, createAmountFromBalance, type Amount } from "@chromia/ft4";
	import { sanitizeNumber } from '$lib/utils/formatting';
	import noToken from '$lib/images/no-token.svg';

	export let balance: { value: bigint; decimals: number }; // Amount;
	export let value: bigint; //Amount;
	export let icon: string;

	const dispatch = createEventDispatcher();
	let input: HTMLInputElement;
	let txtValue = '0';

	function focus() {
		input.focus();
	}
	function setMax() {
		input.focus();
		txtValue = amountToString(balance.value);
		value = balance.value;
        dispatch('valueChanged');
	}
	function updateValue(_val: string, preventUpdate = false) {
		const val = 
            _val
            .replaceAll(/[^\d\.]/g, '')
            .replace('.', 'A')
            .replaceAll('.', '')
            .replace('A', '.');
		const endingPointAndZeroes = 
            val.match(/\.0*$/)?.[0]?.substring(0, balance.decimals) ?? '';
		try {
			value = createAmount(val || '0', balance.decimals).value;
		} catch (e: any) {
			if (e.name === 'AmountOutOfRangeError') {
				value = BigInt('0x' + 'f'.repeat(64));
			}
		} finally {
			txtValue = amountToString(value) + (endingPointAndZeroes ?? '');
            if (!preventUpdate) dispatch('valueChanged');
		}
	}

	$: updateValue(txtValue);
	$: updateValue(amountToString(value), true);

	function onPick() {
		dispatch('openPicker');
	}
	function createAmount(amount: string, decimals: number) {
		let _am: bigint;
		if (amount.match(/\./)) {
			let vals = amount.split('.', 2);
			let decs = vals[1].substring(0, decimals).padEnd(decimals, '0');
			_am = BigInt(vals[0] + decs);
		} else {
			_am = BigInt(amount + '0'.repeat(decimals));
		}
		if (_am > BigInt('0x' + 'f'.repeat(64))) throw { name: 'AmountOutOfRangeError' };
		return {
			value: _am,
			decimals: decimals
		};
	}
	function amountToString(amount: bigint) {
		const txt = amount.toString().padStart(balance.decimals, '0');
		const decimals = txt.substring(txt.length - balance.decimals);
		const integer = txt.substring(0, txt.length - balance.decimals);
		return integer + ('.' + decimals).replace(/\.?0*$/, '');
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	on:click={focus}
	class="bg-gray-400 text-gray-200 divide-x rounded-full p-3 flex justify-start"
>
	<div class="flex relative">
		<button class="w-fit ml-5 hover:text-gray-50 absolute top-[-0.8rem]" on:click={setMax}>
			<span class="text-[8pt]">{sanitizeNumber(amountToString(balance.value))} - Max</span>
		</button>
		<input bind:this={input} bind:value={txtValue} class="ml-5" placeholder="0" />
	</div>
	<button on:click|stopPropagation={onPick} class="p-2 border-r-gray-200">
		<img src={icon ?? noToken} class="w-8 h-8" alt="Pick" />
	</button>
</div>

<style>
	input {
		all: unset;
		margin-left: 1.25rem;
	}
</style>
