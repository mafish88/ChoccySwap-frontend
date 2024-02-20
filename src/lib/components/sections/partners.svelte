<script lang="ts">
    const partners = import.meta.glob(
        "$lib/images/partners/*",
        {import: "default", eager: true}
    );

    const imgs = Object.values(partners) as string[];

    let stopped = false;
</script>    
    
<h3 class="text-[20pt] mb-8 mt-[8rem]">Ecosystem</h3>
<div class="w-screen py-6 bg-gray-300 " role="region"
    on:mouseover={()=>{stopped=true}} on:focus={()=>{stopped=true}}
    on:mouseleave={()=>{stopped=false}} on:blur={()=>{stopped=false}}>
    <div class="relative w-screen h-10">
        <div class="absolute min-w-[200vw] w-[max-content] top-0">
            <div class="relative flex primary min-w-[200vw] justify-around"
                style:animation-play-state={stopped? "paused" : "running"}>
                {#each imgs as img}
                    <img src={img} alt="partner-logo" class="h-10 inline mx-8"/>
                {/each}
                {#each imgs as img}
                    <img src={img} alt="partner-logo" class="h-10 inline mx-8"/>
                {/each}
            </div>
        </div> 
    </div>
</div>

<style>
    .primary {
        left: 0;
        animation: scrollx 10s infinite linear;
    }

    @keyframes scrollx {
        from { left: 0; }
        to { left: -50%; }
    }
</style>