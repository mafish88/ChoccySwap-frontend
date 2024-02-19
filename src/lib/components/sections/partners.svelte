<script lang="ts">
    const partners = import.meta.glob(
        "$lib/images/partners/*",
        {import: "default", eager: true}
    );

    const imgs = Object.values(partners) as string[];

    let stopped = false;
</script>    
    
<h3 class="text-[20pt] mb-8">Partners</h3>
<div class="w-screen py-6 bg-gray-200" role="region"
    on:mouseover={()=>{stopped=true}} on:focus={()=>{stopped=true}}
    on:mouseleave={()=>{stopped=false}} on:blur={()=>{stopped=false}}>
    <div class="relative w-screen h-10">
        <div class="absolute top-0 flex justify-around w-screen primary"
            style:animation-play-state={stopped? "paused" : "running"}>
            {#each imgs as img}
                <img src={img} alt="partner-logo" class="h-10"/>
            {/each}
        </div>
        <div class="absolute top-0 flex justify-around w-screen secondary"
        style:animation-play-state={stopped? "paused" : "running"}>
            {#each imgs as img}
                <img src={img} alt="partner-logo" class="h-10"/>
            {/each}
        </div>
    </div>
</div>

<style>
    .primary {
        animation: scrollx 10s infinite linear;
    }

    @keyframes scrollx {
        from { left: 0%; }
        to { left: -100%; }
    }
    .secondary {
        animation: scrollx2 10s infinite linear;
    }

    @keyframes scrollx2 {
        from { left: 100%; }
        to { left: 0%; }
    }
</style>