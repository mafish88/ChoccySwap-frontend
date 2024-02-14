<script lang="ts">
	import Mediaquery from '../atomic/mediaquery.svelte';
    import test1 from "$lib/images/test_1.png";
    import test2 from "$lib/images/test_2.png";
    import test3 from "$lib/images/test_3.png";
    import test4 from "$lib/images/test_4.png";

    const feats = [
        {
            url: test1,
            size: "4rem",
            text:"Zero gas",
            explainer: "Using ChoccySwap only involves a liquidity fee."
        },
        {
            url: test2,
            size: "4rem",
            text:"FT4 & ERC20 compatible",
            explainer: "You can exchange between FT4 and ERC20 tokens."
        },
        {
            url: test3,
            size: "4rem",
            text:"Orderbook trading",
            explainer: "You can trade while you're logged off using the orderbook."
        },
        {
            url: test4,
            size: "4rem",
            text:"To be announced",
            explainer: "This feature is going to be announced soon. Stay tuned and follow us to know more!"
        },
        {
            url: test4,
            size: "4rem",
            text:"To be announced",
            explainer: "This feature is going to be announced soon. Stay tuned and follow us to know more!"
        },
        {
            url: test4,
            size: "4rem",
            text:"To be announced",
            explainer: "This feature is going to be announced soon. Stay tuned and follow us to know more!"
        },
    ];
</script>    
    
<Mediaquery query="(min-width:700px)" let:matches>
    <div class="flx w-full mt-[8rem]">
        <div class="grid mx-2"
            style="grid-template-columns:repeat({matches? "2" : "1"}, minmax(0, 1fr));">
            {#each feats as feat}
                <span class="w-[350px] h-full flx p-7 !justify-start border-gray-400 border">
                    <img style:height={feat.size} class="mr-2" src={feat.url} alt="" />
                    <div class="flex flex-col align-center">
                        <p class="italic text-gray-0 text-[15pt]">
                            {feat.text}
                        </p>
                        <p class="italic text-gray-200 text-[10pt]">
                            {feat.explainer}
                        </p>
                    </div>
                </span>
            {/each}
        </div>
    </div>
</Mediaquery>
