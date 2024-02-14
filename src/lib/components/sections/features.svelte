<script lang="ts">
	import Mediaquery from '../atomic/mediaquery.svelte';
    import test1 from "$lib/images/test_1.png";
    import test2 from "$lib/images/test_2.png";
    import test3 from "$lib/images/test_3.png";
    import test4 from "$lib/images/test_4.png";

    const feats = [
        {url: test1, text:"Zero gas transactions"},
        {url: test2, text:"FT4 and ERC20 compatible"},
        {url: test3, text:"Orderbook trading"},
        {url: test4, text:"To be announced"},
        {url: test4, text:"To be announced"},
        {url: test4, text:"To be announced"},
    ];
</script>    
    
<Mediaquery query="(min-width:700px)" let:matches>
    <div class="flx w-full mt-[8rem]">
        <div class="grid mx-2"
            style="grid-template-columns:repeat({matches? "2" : "1"}, minmax(0, 1fr));">
            {#each feats as feat}
                <span class="w-full h-full flx p-7 !justify-start border-gray-400 border">
                    <img class="w-10 h-10 mr-2" src={feat.url} alt="" />
                    <p class="italic text-gray-0 text-[15pt]">
                        {feat.text}
                    </p>
                </span>
            {/each}
        </div>
    </div>
</Mediaquery>
