<script lang="ts">
	import Tokeninput from "$lib/components/atomic/tokeninput.svelte";
    import swtch from "$lib/images/switch.svg";
	//import { createAmount, type Asset, type SupportedNumber } from "@chromia/ft4";
    import noToken from "$lib/images/no-token.svg";
/*
    let token1: Asset | undefined = undefined;
    let token2: Asset | undefined = undefined;

    $: balance1 = am(0, token1?.decimals)
    $: balance2 = am(0, token2?.decimals)

    function am(val: SupportedNumber | undefined, dec: number | undefined) {
        if ( val === undefined || dec === undefined ) {
            return createAmount(0,0)
        }
        return createAmount(val, dec);
    }*/

    let balances = [
        {value:100000n, decimals:3},
        {value:1000000000n, decimals:6}
    ];

    let vals = [0n, 0n];
    let valsChanged: [boolean, boolean] = [false, false];
    let exchangeFactor = 2000n;
    let exchangeFactorReversed = false;

    $: {
        valsChanged = valsChanged;
        updateValues();
        valsChanged = [false, false];
    }

    function updateValues() {
        if (valsChanged[0]) vals[1] = 
            exchangeFactorReversed? 
            vals[0] / exchangeFactor
            : vals[0] * exchangeFactor;
        else if (valsChanged[1]) vals[0] = 
            exchangeFactorReversed? 
            vals[1] * exchangeFactor
            : vals[1] / exchangeFactor;
    }

    function switchTokens() {
        balances.reverse();
        vals.reverse();
        valsChanged.reverse();
        exchangeFactorReversed = !exchangeFactorReversed;
        updateValues()
    }
</script>

<div class="h-screen p-8 flx flex-col">
    <div class="swap flx flex-col">
        <Tokeninput
            balance={balances[0]}
            bind:value={vals[0]}
            icon={noToken}
            on:valueChanged={()=>{valsChanged[0]=true}}/>
        <button class="m-2" on:click={switchTokens}>
            <img src={swtch} alt="switch" class="w-8 h-8"/>
        </button>
        <Tokeninput
            balance={balances[1]}
            bind:value={vals[1]}
            icon={noToken}
            on:valueChanged={()=>{valsChanged[1]=true}}/>
    </div>
</div>

<style>
    .swap {
        background-color: var(--gray);
        padding: 2rem;
        border-radius: 2rem;
    }
</style>