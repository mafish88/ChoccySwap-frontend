<script lang="ts">
	import Mediaquery from "../atomic/mediaquery.svelte";

</script>    
    
<Mediaquery query="(min-width:408px)" let:matches>
    <div class="flx space-x-4 my-10" style:flex-direction={matches? "row" : "column"}>
        <h2 class="text-[16pt] text-gray-0 font-sans">
            What makes us <span class="text-pink">special</span>?
        </h2>
        <div class="relative mt-1">
            <h2 class="invisible text-[16pt] font-sans">
                Evm compatiblee
            </h2>
            <h2 class="font-sans top-0 absolute roll1 text-[16pt]">
                Zero gas fees
            </h2>
            <h2 class="font-sans top-0 absolute roll2 text-[16pt]">
                FT4 Trading
            </h2>
            <h2 class="font-sans top-0 absolute roll3 text-[16pt]">
                EVM compatible
            </h2>
        </div>
    </div>
</Mediaquery>

<style>
    span {
        font-family: "Nickainley", sans-serif;
        font-size: 20pt;
        text-shadow: 0px 0px 8px #ff3fdc;
    }
    .roll1 {
        opacity: 0;
        transform: scaleY(0) translateY(20pt);
        animation: roll 6s ease-in-out infinite;
    }
    .roll2 {
        opacity: 0;
        transform: scaleY(0) translateY(20pt);
        animation: roll 6s ease-in-out 2s infinite;
    }
    .roll3 {
        opacity: 0;
        transform: scaleY(0) translateY(20pt);
        animation: roll 6s ease-in-out 4s infinite;
    }

    @keyframes roll {
        0% { /* down, invisible */
            opacity: 0;
            transform: scaleY(0) translateY(20pt);
        }
        17% { /* visible */
            opacity: 1;
            transform: none;
        }
        33% { /* end of pause */
            opacity: 1;
            transform: none;
        }
        50% { /* up, invisible */
            opacity: 0;
            transform: scaleY(0) translateY(-20pt);
        }
        66% { /* up, invisible */
            opacity: 0;
            transform: scaleY(0) translateY(-20pt);
        }
        83% { /* up, invisible */
            opacity: 0;
            transform: scaleY(0) translateY(-20pt);
        }
        100% { /* down, invisible */
            opacity: 0;
            transform: scaleY(0) translateY(20pt);
        }
    }
</style>