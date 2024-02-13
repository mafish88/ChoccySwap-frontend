<script lang="ts">
    export let text: string;
    export let tooltip: string = "";
    export let isA: boolean = true;
    export let href: string = "";
    export let action: () => void = ()=>{};

    let hover = "notip";
    let timeout: number | undefined = undefined;
</script>

{#if isA}
    <a {href} class="{$$restProps.class} flx bg-blue hover:bg-blue-200
        text-gray rounded-xl px-4 relative"
        on:mouseenter={()=>{
            hover="tip";
            clearTimeout(timeout);
        }}
        on:mouseleave={()=>{
            hover="fade";
            timeout = setTimeout(()=>{ hover="notip" }, 300)
        }}>
        {text}

        {#if tooltip}
            <div class="{hover} absolute bg-gray-400 p-1 rounded 
                text-gray-0 bottom-[3rem]">
                {tooltip}
            </div>
            <svg class="{hover} absolute p-1 rounded 
                text-gray-0 bottom-[2rem] w-10 h-10" viewBox="0,0,10,10">
                <path style="stroke-width:0.5;"
                    class="fill-gray-400" d="M0,5 l5,5 l5,-5"/>
            </svg>
        {/if}
        
    </a>
{:else}
    <button on:click={action} class="{$$restProps.class} bg-blue hover:bg-blue-200
        text-gray rounded-xl px-4 relative"
        on:mouseenter={()=>{
            hover="tip";
            clearTimeout(timeout);
        }}
        on:mouseleave={()=>{
            hover="fade";
            timeout = setTimeout(()=>{ hover="notip" }, 300)
        }}>
        {text}

        {#if tooltip}
            <div class="{hover} absolute bg-transparent
                bottom-[3rem] left-0 right-0 flx flex-col">
                <div class="bg-gray-400 p-1 rounded text-gray-0">
                    {tooltip}
                </div>
                <svg class="w-10 h-5" viewBox="0,0,10,5">
                    <path style="stroke-width:0.5;"
                        class="fill-gray-400" d="M0,0 l5,5 l5,-5"/>
                </svg>
            </div>
        {/if}

    </button>
{/if}

<style>
    .tip {
        opacity: 1;
        filter: drop-shadow(0 0 8px #181818);
    }
    .notip {
        opacity: 0;
        display: none;
    }
    .fade {
        opacity: 0;
    }
</style>