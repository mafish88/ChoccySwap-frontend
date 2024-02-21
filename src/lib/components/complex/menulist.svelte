<script lang="ts">
    export let open = false;

    const links = [
        ["Docs", "https://docs.choccyswap.com"],
        ["X", "https://x.com/ChoccySwap"],
        ["Telegram", "https://t.me/ChoccySwapCommunity"],
        ["Governance", "https://vote.choccyswap.com"],
        ["Git", "https://github.com/ChoccySwap/"],
    ]
</script>

<div class="{open? "" : "closed"} absolute rounded-b
    bg-gray-400 top-[2rem] right-0 px-2 py-1 space-y-1 flex justify-center align-end flex-col">
    {#each links as info, i}
        <hr class="hr{i}"/>
        <a class="text-gray-100 hover:text-gray-0" target="_blank"
            href={info[1]}>{info[0]}</a>
    {/each}
</div>

<style>
    div.closed {
        opacity: 0;
        display: none;
    }
    .hr0 {
        display: none;
    }
</style>