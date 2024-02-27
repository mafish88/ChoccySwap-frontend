<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { createAmount, createAmountFromBalance } from "@chromia/ft4";
    import { sanitizeNumber } from "$lib/utils/formatting";
    import noToken from "$lib/images/no-token.svg";

    export let balance = createAmount(0, 18);
    export let value = createAmount(0, balance.decimals);
    export let icon = noToken;

    const dispatch = createEventDispatcher();
    let input: HTMLInputElement;
    let txtValue = "0";

    function focus() {
        input.focus();
    }
    function setMax() {
        input.focus();
        txtValue = balance.toString();
        value = balance;
    }
    function updateValue (_val: string) {
        const val = _val.replace(/[^\d\.]*$/, "");
        const endingPoint = 
            val.match(/\./g)?.length === 1
            && val.match(/\.$/) !== null;
        try {
            value = createAmount(val || "0", balance.decimals)
            
        } catch (e: any) {
            if (e.name === "AmountOutOfRangeError"){
                value = createAmountFromBalance(
                    BigInt("0x" + "f".repeat(64)) - 1n,
                    balance.decimals
                )
            }
        } finally {
            txtValue = value.toString() + (endingPoint? "." : "");
        }
    }

    $: updateValue(txtValue);

    function onPick() {
        dispatch('openPicker');
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div on:click={focus}
    class="bg-gray-400 text-gray-200 divide-x rounded-full p-3 flex justify-start">
    <div class="flex relative">
        <button class="w-fit ml-5 hover:text-gray-50 absolute top-[-0.8rem]"
            on:click={setMax}>
            <span class="text-[8pt]">{
                    sanitizeNumber(balance)
                } - Max</span>
        </button>
        <input bind:this={input} bind:value={txtValue} class="ml-5" placeholder="0">
    </div>
    <button on:click|stopPropagation={onPick} class="p-2 border-r-gray-200">
        <img src={icon} class="w-8 h-8" alt="Pick">
    </button>
</div>

<style>
    input {
        all: unset;
        margin-left: 1.25rem;
    }
</style>