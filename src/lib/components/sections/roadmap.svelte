<script lang="ts">
	import Event from "../complex/event.svelte";
    import { roadmap } from "$lib/data/roadmap";
	import Openable from "../atomic/openable.svelte";

</script>    
    
<div class="flx flex-col w-full mt-[8rem] text-gray-0">
    <h3 class="text-[20pt] mb-8">Roadmap</h3>
    {#each roadmap as section}
        <Openable title={section.title} color={section.color}
            class="border border-2 rounded-xl p-4 m-2 w-[350px]">
            <div>
                {#each section.events as event}
                    <Event {...event} color={section.color}/>
                {/each}
            </div>
        </Openable>
    {/each}
</div>
